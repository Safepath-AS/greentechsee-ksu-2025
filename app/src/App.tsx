import {
  Container,
  CssBaseline,
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

export const App = () => {
  const { products, addProduct, deleteProduct } = useDb();

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
              <ListItemText primary={name} secondary={modelNumber} />
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
        onClick={() =>
          addProduct({
            modelNumber: `model-${Date.now()}`,
            name: `Product ${Date.now()}`,
          })
        }
        variant="extended"
      >
        <AddIcon />
        Add Product
      </Fab>
    </Container>
  );
};
