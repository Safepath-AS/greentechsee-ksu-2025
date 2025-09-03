import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
        image="https://www.thegoodlifecentre.co.uk/wp-content/uploads/2022/10/Standard-Drill-600x343.png"
        sx={{
          width: "50%",
        }}
      />
      <CardContent>
        <Typography variant="h3" sx={{ fontSize: 20 }}>
          {product.name}
        </Typography>
        <Typography variant="h4" sx={{ fontSize: 13.5 }}>
          Kjøpt: {Date.parse(product.id)} <br />
          EAN: ee <br />
          Artikkelnummer: {product.modelNumber} <br />
          Serie: Drillserie
        </Typography>
        <Typography variant="h6" sx={{ fontSize: 13.5, color: "gray" }}>
          desc this is a description lalalalalala
        </Typography>
      </CardContent>
    </Card>
  );
};
