import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Stack,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDb, type CreateProduct, type Product } from "../db";
import { TagsInput } from "../TagsInput";

export interface AddProductScreenProps {
  onClose?: () => void;
  onAdd?: (product: Product) => void;
}

export const AddProductScreen = ({ onClose, onAdd }: AddProductScreenProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateProduct>();
  const { addProduct } = useDb();
  const submit = (product: CreateProduct) => {
    const newProduct = addProduct(product);
    onAdd?.(newProduct);
    onClose?.();
  };
  const cancel = () => {
    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <DialogTitle>Legg til en ting</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Input type="file" inputProps={{ accept: "image/*" }} />
          <TextField
            label="Tittel"
            {...register("name", {
              required: "Tittel må fylles ut",
              maxLength: {
                message: "Tittel kan ikke være lengre enn 64 tegn",
                value: 64,
              },
            })}
            {...(errors.name && {
              error: true,
              helperText: errors.name.message,
              maxLength: {
                message: "Modellnummer kan ikke være lengre enn 64 tegn",
                value: 64,
              },
            })}
          />
          <TextField
            label="Model Number"
            {...register("modelNumber", {
              required: "Modellnummer må fylles ut",
              maxLength: {
                message: "Modellnummer kan ikke være lengre enn 50 tegn",
                value: 50,
              },
            })}
            {...(errors.modelNumber && {
              error: true,
              helperText: errors.modelNumber.message,
            })}
          />
          <Controller
            control={control}
            name="tagIds"
            render={({ field }) => <TagsInput {...field} />}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={cancel}>
          Avbryt
        </Button>
        <Button color="primary" variant="contained" type="submit">
          Legg til
        </Button>
      </DialogActions>
    </form>
  );
};
