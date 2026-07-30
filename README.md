# Penwell Law OpenSign Theme Fork

This repository is a themed fork of the [OpenSignLabs/OpenSign](https://github.com/OpenSignLabs/OpenSign)
frontend (`apps/OpenSign`), published solely to satisfy the AGPL-3.0 Section 13
network-use source-offer requirement for the instance running at
[sign.penwell.law](https://sign.penwell.law).

**Scope of changes from upstream:** UI theming and configuration only --
color tokens (`tailwind.config.js`'s DaisyUI theme), typography (Fraunces /
Newsreader fonts), border-radius, an app-wide MUI theme provider, and a small
number of hardcoded color fixes in individual screens so the reskin applies
consistently. No business logic, no server code, and no client data of any
kind lives in this repository -- Penwell Law's client and matter data lives
in a separate, private database, never here.

**Original project:** [OpenSignLabs/OpenSign](https://github.com/OpenSignLabs/OpenSign)
(AGPL-3.0 -- see `LICENSE`). All credit for the underlying application belongs
to the OpenSign project and its contributors.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies.

### `npm run dev` / `npm start`

Runs the app in development mode against a local OpenSign server.

### `npm run build`

Builds the app for production to the `build` folder.
