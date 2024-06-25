import { IColor } from "./theme.interface";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const breakpoints = baseTheme.breakpoints;

const extendTheme = (baseTheme: ThemeOptions, customStyles: ThemeOptions) =>
  createTheme({
    ...baseTheme,
    ...customStyles,
  });

const blue: IColor = {
  main: "#005487",
  light: "#EEF5FA",
};

const theme = extendTheme(baseTheme, {
  typography: {
    fontFamily: "Montserrat",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    button: {
      textTransform: "none",
      fontSize: "18px",
    },
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      [breakpoints.down("md")]: {
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "30px",
      },
    },
    h2: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "36px",
      [breakpoints.down("md")]: {
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "28px",
      },
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "28px",
      [breakpoints.down("md")]: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "20px",
      },
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
      [breakpoints.down("md")]: {
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px",
      },
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      [breakpoints.down("md")]: {
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "20px",
      },
    },
    subtitle3: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "20px",
      [breakpoints.down("md")]: {
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "16px",
      },
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      [breakpoints.down("md")]: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
      },
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      [breakpoints.down("md")]: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
      },
    },
    body3: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      [breakpoints.down("md")]: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      ...blue,
    },
    background: {
      default: "#340e52",
      paper: "#FCFCFC",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root, & .MuiInputLabel-root": {
            Typography: {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 26,
          backgroundColor: "#F0F0F0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 26,
          backgroundColor: "white",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { size: "large" },
          style: {
            fontSize: "18px",
            lineHeight: "24px",
            fontWeight: 500,
            [breakpoints.down("md")]: {
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 600,
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 600,
            [breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 600,
            },
          },
        },
        {
          props: { size: "small" },
          style: { fontSize: "14px", lineHeight: "20px", fontWeight: 600 },
        },
      ],
    },
  },
});

export default theme;
