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
            {...register("name", {
              required: "Navn må fylles ut",
              maxLength: {
                message: "Navn kan ikke være lengre enn 64 tegn",
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
            label="Modellnummer"
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
          <TextField
            label="Modellspesifikasjon"
            {...register("modelSpecification", {
              maxLength: {
                message:
                  "Modellspesifikasjon kan ikke være lengre enn 200 tegn",
                value: 200,
              },
            })}
            {...(errors.modelSpecification && {
              error: true,
              helperText: errors.modelSpecification.message,
            })}
          />
          <TextField
            label="Description"
            {...(register("description"),
            {
              maxLength: {
                message: "Beskrivelse kan ikke være lengre enn 500 tegn",
                value: 500,
              },
            })}
            {...(errors.description && {
              error: true,
              helperText: errors.description.message,
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
