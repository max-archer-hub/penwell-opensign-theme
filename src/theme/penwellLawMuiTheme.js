// PW-014a2a -- app-wide MUI theme for the Penwell Law reskin. No app-wide MUI
// ThemeProvider existed before this (only a scoped one inside the email
// builder feature, EmailBuildertheme.ts) -- MUI components elsewhere were
// rendering on MUI's own default blue palette. Wrapping the app root in this
// provider means every MUI component in the app picks up the brand
// automatically, rather than needing a per-component edit for each screen
// (that per-screen sweep for the non-MUI/DaisyUI parts is PW-014a2b's job).
//
// Palette sourced directly from the live site (site/index.html's :root custom
// properties in the penwell-law repo) -- same values used in tailwind.config.js's
// repainted "opensigncss" DaisyUI theme, kept consistent across both systems.
import { createTheme } from "@mui/material/styles";

const penwellLawMuiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#11203A", // --ink
      contrastText: "#FAF7F0" // --paper
    },
    secondary: {
      main: "#7A6224", // --gold-deep
      contrastText: "#FAF7F0" // --paper
    },
    background: {
      default: "#FAF7F0", // --paper
      paper: "#F3EEE3" // --paper-2
    },
    text: {
      primary: "#11203A", // --ink
      secondary: "#3C4A63" // --ink-soft
    },
    divider: "rgba(17,32,58,0.14)" // --line
    // info/success/warning/error deliberately left as MUI's own sane defaults --
    // same reasoning as the DaisyUI theme: the editorial palette has no
    // reds/greens/blues, and recognizable status colors matter more than
    // brand purity for a signing app's error/success states.
  },
  typography: {
    fontFamily: "'Newsreader', serif",
    h1: { fontFamily: "'Fraunces', serif" },
    h2: { fontFamily: "'Fraunces', serif" },
    h3: { fontFamily: "'Fraunces', serif" },
    h4: { fontFamily: "'Fraunces', serif" },
    h5: { fontFamily: "'Fraunces', serif" },
    h6: { fontFamily: "'Fraunces', serif" },
    button: { fontFamily: "'Fraunces', serif", textTransform: "none" }
  },
  shape: {
    borderRadius: 2 // sharp, not rounded -- matches the site's border-radius:2px
  }
});

export default penwellLawMuiTheme;
