import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useDb, type CreateProduct } from "./db";
import { useForm } from "react-hook-form";

export interface AddProductDialogContentProps {
  onClose?: () => void;
}

export const AddProductDialogContent = ({
  onClose,
}: AddProductDialogContentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProduct>();
  const { addProduct } = useDb();
  const submit = (product: CreateProduct) => {
    addProduct(product);
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
          <TextField
            label="Name"
            {...register("name", { required: "Navn må fylles ut" })}
            {...(errors.name && {
              error: true,
              helperText: errors.name.message,
            })}
          />
          <TextField
            label="Model Number"
            {...register("modelNumber", {
              required: "Modellnummer må fylles ut",
            })}
            {...(errors.modelNumber && {
              error: true,
              helperText: errors.modelNumber.message,
            })}
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
