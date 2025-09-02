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

export const App = () => {
  const { products, deleteProduct } = useDb();
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);

  return (
    <Container>
      <CssBaseline />
      yo
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
        Add Product
      </Fab>
      <Dialog
        fullScreen
        open={addProductDialogOpen}
        onClose={() => setAddProductDialogOpen(false)}
      >
        <AddProductDialogContent
          onClose={() => setAddProductDialogOpen(false)}
        />
      </Dialog>
    </Container>
  );
};
