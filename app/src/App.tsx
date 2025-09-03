import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  type Breakpoint,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DbToolButtons } from "./DbToolButtons";
import { Fallback } from "./Fallback";
import { HeaderBar } from "./HeaderBar";
import { LabelCard } from "./LabelCard";
import { Screen } from "./Screen";
import { ScreenContext } from "./ScreenContext";
import { theme } from "./theme";

export const CONTAINER_MAX_WIDTH: Breakpoint = "md";

export const App = () => {
  const [screens, setScreens] = useState({
    addProduct: false,
    addTag: false,
  });

  const setAddProductDialogOpen = (open: boolean) => {
    setScreens((prev) => ({ ...prev, addProduct: open }));
  };
  const setAddTagDialogOpen = (open: boolean) => {
    setScreens((prev) => ({ ...prev, addTag: open }));
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <HeaderBar />
        <Container maxWidth={CONTAINER_MAX_WIDTH}>
          <CssBaseline />
          <ErrorBoundary FallbackComponent={Fallback}>
            <LabelCard />
            <ScreenContext.Provider
              value={{
                addProductDialogOpen: screens.addProduct,
                setAddProductDialogOpen,
                addTagDialogOpen: screens.addTag,
                setAddTagDialogOpen,
              }}
            >
              <Screen />
            </ScreenContext.Provider>
          </ErrorBoundary>
          <Typography sx={{ marginTop: 4 }}>
            versjon {import.meta.env.VITE_VERSION}
          </Typography>
          <DbToolButtons />
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
