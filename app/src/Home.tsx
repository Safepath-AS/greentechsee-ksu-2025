import { List, ListItem, IconButton, ListItemText, Fab } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { AddProductDialogContent } from "./AddProductDialogContent";
import { Fallback } from "./Fallback";
import { useState } from "react";
import { useDb } from "./db";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { CONTAINER_MAX_WIDTH } from "./App";
import { WindowDialog } from "./WindowDialog";

export const Home = () => {
  const { products, deleteProduct } = useDb();
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);

  return (
    <>
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
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: (theme) =>
            `max(calc((100vw - ${theme.breakpoints.values[CONTAINER_MAX_WIDTH]}px) / 2 + 16px), 16px)`,
        }}
        onClick={() => setAddProductDialogOpen(true)}
        variant="extended"
      >
        <AddIcon />
        Legg til produkt
      </Fab>
      <WindowDialog
        open={addProductDialogOpen}
        onClose={() => setAddProductDialogOpen(false)}
      >
        <ErrorBoundary FallbackComponent={Fallback}>
          <AddProductDialogContent
            onClose={() => setAddProductDialogOpen(false)}
          />
        </ErrorBoundary>
      </WindowDialog>
    </>
  );
};
