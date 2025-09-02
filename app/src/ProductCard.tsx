import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "./db";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: 3,
        paddingLeft: 2,
        borderRadius: 2,
        backgroundColor: "#e6e6e6",
      }}
    >
      <CardMedia
        component="img"
        image="https://www.thegoodlifecentre.co.uk/wp-content/uploads/2022/10/Standard-Drill-600x343.png"
        sx={{
          width: 300,
        }}
      />
      <CardContent>
        <Typography variant="h3">{product.name}</Typography>
        <Typography variant="h4" sx={{ fontSize: 25 }}>
          Kjøpt: {Date.parse(product.id)} <br />
          EAN: {Date.parse(product.id)} <br />
          Artikkelnummer: {Date.parse(product.id)} <br />
          Serie: {Date.parse(product.id)}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: 15, color: "gray" }}>
          <br />
          desc
        </Typography>
      </CardContent>
    </Card>
  );
};
