import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100vmax",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: "100vmax",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});
