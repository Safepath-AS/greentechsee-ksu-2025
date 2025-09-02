import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  type Breakpoint,
} from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback";
import { theme } from "./theme";
import { Home } from "./Home";
import { ClearDbButton } from "./ClearDbButton";

export const CONTAINER_MAX_WIDTH: Breakpoint = "md";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        <CssBaseline />
        <ErrorBoundary FallbackComponent={Fallback}>
          <Home />
        </ErrorBoundary>
        <Typography>versjon {import.meta.env.VITE_VERSION}</Typography>
        <ClearDbButton />
      </Container>
    </ThemeProvider>
  );
};
