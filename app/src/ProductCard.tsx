import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { JSX } from "react";
import type { Product } from "./db";

export type ProductCardProps = {
  product: Product;
};

interface FieldProps {
  label: string;
  value: string | number | JSX.Element;
}

const Field = ({ label, value }: FieldProps) => (
  <div>
    <strong>{label}:</strong> {value}
  </div>
);

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        borderRadius: 1,
      }}
    >
      <CardMedia
        component="img"
        image={product.imageData}
        sx={{
          width: "50%",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h3" sx={{ fontSize: 20 }}>
            {product.name}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 13.5 }}>
            {product.modelSpecification && (
              <Field label="Serie" value={product.modelSpecification} />
            )}
            <Field
              label="Kjøpt"
              value={dayjs(product.boughtAt).format("YYYY/MM/DD")}
            />
            {product.ean && <Field label="EAN" value={product.ean} />}
            {product.articleNumber && (
              <Field label="Artikkelnummer" value={product.articleNumber} />
            )}
            {product.modelSpecification && (
              <Field label="Serie" value={product.modelSpecification} />
            )}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: 13.5, color: "gray" }}>
            {product.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
