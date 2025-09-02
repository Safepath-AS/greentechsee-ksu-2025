import { Container, CssBaseline, Dialog, Fab, Typography } from "@mui/material";
import { useDb } from "./db";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddProductDialogContent } from "./AddProductDialogContent";
import { ProductCard } from "./ProductCard";

export const App = () => {
  const { products } = useDb();
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);

  return (
    <Container>
      <CssBaseline />
      yo
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
      <Typography> {import.meta.env.VITE_VERSION}</Typography>
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
