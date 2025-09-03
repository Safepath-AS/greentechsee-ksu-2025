import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useContext } from "react";
import { CONTAINER_MAX_WIDTH } from "../App";
import { useDb } from "../db";
import { ProductCard } from "../ProductCard";
import { ScreenContext } from "../ScreenContext";

export const HomeScreen = () => {
  const { products } = useDb();
  const { setAddProductDialogOpen } = useContext(ScreenContext);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
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
    </>
  );
};
