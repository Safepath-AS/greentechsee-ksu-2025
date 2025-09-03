import AddIcon from "@mui/icons-material/Add";
import { Fab, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CONTAINER_MAX_WIDTH } from "../App";
import { useDb } from "../db";
import { ProductCard } from "../ProductCard";
import { ScreenContext } from "../ScreenContext";
import { TagFilter } from "../TagFilter";

export const HomeScreen = () => {
  const { products } = useDb();
  const { setAddProductDialogOpen } = useContext(ScreenContext);
  const [tagIds, setTagIds] = useState<string[]>([]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: 4, fontWeight: "bold" }}
          >
            Dine gjenstander
          </Typography>
        </Grid>
        <Grid>
          <TagFilter tagIds={tagIds} onChange={setTagIds} />
        </Grid>
        {products
          .filter(
            (product) =>
              tagIds.length === 0 ||
              tagIds.every((tagId) => product.tagIds.includes(tagId))
          )
          .map((product) => (
            <Grid key={product.id} size={12}>
              <ProductCard
                key={product.id}
                product={product}
                onTagClick={(tagId) => {
                  if (tagIds.includes(tagId)) {
                    setTagIds(tagIds.filter((t) => t !== tagId));
                  } else {
                    setTagIds([...(tagIds || []), tagId]);
                  }
                }}
              />
            </Grid>
          ))}
      </Grid>
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
