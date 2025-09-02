import {
  Container,
  CssBaseline,
  Dialog,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDb } from "./db";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { AddProductDialogContent } from "./AddProductDialogContent";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback";

export const App = () => {
  const { products, deleteProduct } = useDb();
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);

  return (
    <Container>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={Fallback}>
        {products && (
          <List>
            {products.map(({ id, name, modelNumber }) => (
              <ListItem
                key={modelNumber}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteProduct(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemText
                  primary={name}
                  secondary={`${modelNumber} (${id})`}
                />
              </ListItem>
            ))}
          </List>
        )}
        <Typography>versjon {import.meta.env.VITE_VERSION}</Typography>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
          onClick={() => setAddProductDialogOpen(true)}
          variant="extended"
        >
          <AddIcon />
          Legg til produkt
        </Fab>
        <Dialog
          fullScreen
          open={addProductDialogOpen}
          onClose={() => setAddProductDialogOpen(false)}
        >
          <ErrorBoundary FallbackComponent={Fallback}>
            <AddProductDialogContent
              onClose={() => setAddProductDialogOpen(false)}
            />
          </ErrorBoundary>
        </Dialog>
      </ErrorBoundary>
    </Container>
  );
};
