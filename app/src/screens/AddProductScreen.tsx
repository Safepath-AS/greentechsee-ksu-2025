import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import { useDb, type CreateProduct, type Product } from "../db";
import { FileInput } from "../FileInput";
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
          <Controller
            control={control}
            name="imageData"
            rules={{ required: "Bilde er påkrevd" }}
            render={({ field, fieldState }) => {
              return (
                <FileInput
                  {...field}
                  label="Bilde"
                  slotProps={{
                    htmlInput: {
                      accept: "image/*",
                    },
                  }}
                  helperText={
                    fieldState.invalid
                      ? fieldState.error?.message || "Dårlig fil"
                      : ""
                  }
                  error={fieldState.invalid}
                />
              );
            }}
          />
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
            label="EAN"
            {...register("ean", {
              required: "EAN må fylles ut",
              maxLength: {
                message: "EAN kan ikke være lengre enn 50 tegn",
                value: 50,
              },
            })}
            {...(errors.ean && {
              error: true,
              helperText: errors.ean.message,
            })}
          />
          <TextField
            label="Artikkelnummer"
            {...register("articleNumber", {
              required: "Artikkelnummer må fylles ut",
              maxLength: {
                message: "Artikkelnummer kan ikke være lengre enn 50 tegn",
                value: 50,
              },
            })}
            {...(errors.articleNumber && {
              error: true,
              helperText: errors.articleNumber.message,
            })}
          />
          <TextField
            label="Serie"
            {...register("series", {
              required: "Serie må fylles ut",
              maxLength: {
                message: "Serie kan ikke være lengre enn 50 tegn",
                value: 50,
              },
            })}
            {...(errors.series && {
              error: true,
              helperText: errors.series.message,
            })}
          />
          <Controller
            control={control}
            name="boughtAt"
            rules={{ required: true }}
            render={({ field, fieldState }) => {
              return (
                <DateTimePicker
                  label="Dato kjøpt"
                  value={field.value ? dayjs(field.value) : undefined}
                  inputRef={field.ref}
                  onChange={(date) => {
                    field.onChange(date?.toISOString());
                  }}
                  slotProps={{
                    textField: {
                      error: fieldState.invalid,
                      helperText: fieldState.invalid
                        ? "Dato kjøpt må fylles ut"
                        : "",
                    },
                  }}
                />
              );
            }}
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
