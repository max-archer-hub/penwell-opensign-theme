# Adapted from upstream's Dockerhubfile for this repo's flattened structure
# (this repo IS apps/OpenSign's content at its root, not the whole monorepo).
FROM node:22.14.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x entrypoint.sh

# PW-014d bugfix (2026-07-30): VITE_APPID must be a real build ARG, not just a
# runtime env var. Vite embeds import.meta.env.VITE_APPID into the JS bundle at
# BUILD time by reading whatever's in the environment when `npm run build`
# runs -- entrypoint.sh's runtime env.js generation only covers
# REACT_APP_SERVERURL, never APPID. Without this, the client silently falls
# back to index.jsx's hardcoded default "opensign", which does not match the
# server's real configured APP_ID -- every Parse cloud-function call gets
# rejected 403 {"error":"unauthorized"}, with no error surfaced anywhere in
# the UI (the app just shows whatever its own catch-block copy says instead).
ARG VITE_APPID
ENV VITE_APPID=$VITE_APPID
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false
RUN npm run build

RUN sed -i '/<head>/a\<script src="/env.js"></script>' build/index.html

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["npm", "start"]
