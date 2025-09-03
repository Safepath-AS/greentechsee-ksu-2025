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
import { HeaderBar } from "./HeaderBar";
import { LabelCard } from "./LabelCard";

export const CONTAINER_MAX_WIDTH: Breakpoint = "md";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        <CssBaseline />
        <ErrorBoundary FallbackComponent={Fallback}>
          <LabelCard />
          <Home />
        </ErrorBoundary>
        <Typography sx={{ marginTop: 4 }}>
          versjon {import.meta.env.VITE_VERSION}
        </Typography>
        <ClearDbButton />
      </Container>
    </ThemeProvider>
  );
};
