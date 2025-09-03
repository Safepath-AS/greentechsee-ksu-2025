import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { Product } from "./db";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      sx={{
        all: "unset",
        display: "flex",
        alignItems: "center",
        marginTop: 3,
        paddingLeft: 2,
        borderRadius: 1,
        backgroundColor: "#e6e6e6",
      }}
    >
      <CardMedia
        component="img"
        image={product.imageData}
        sx={{
          width: "40%",
          maxHeight: 100,
        }}
      />
      <CardContent>
        <Typography variant="h3" sx={{ fontSize: 20 }}>
          {product.name}
        </Typography>
        <Typography variant="h4" sx={{ fontSize: 13.5 }}>
          Kjøpt: {dayjs(product.boughtAt).format("YYYY/MM/DD HH:mm")} <br />
          EAN: {product.ean} <br />
          Artikkelnummer: {product.articleNumber} <br />
          Serie: {product.series}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: 13.5, color: "gray" }}>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
