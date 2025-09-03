import { useForm } from "react-hook-form";
import { type CreateTag, type Tag, useDb } from "../db";
import {
  DialogTitle,
  DialogContent,
  Stack,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export interface AddTagScreenProps {
  onClose?: () => void;
  onAdd?: (tag: Tag) => void;
}

export const AddTagScreen = ({ onClose, onAdd }: AddTagScreenProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTag>();
  const { addTag } = useDb();
  const submit = (tag: CreateTag) => {
    const newTag = addTag(tag);
    onAdd?.(newTag);
    onClose?.();
  };
  const cancel = () => {
    onClose?.();
  };

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        handleSubmit(submit);
      }}
    >
      <DialogTitle>Legg til ny tag</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            label="Navn"
            {...register("name", {
              required: "Navn må fylles ut",
              maxLength: {
                message: "Navn kan ikke være lengre enn 32 tegn",
                value: 32,
              },
            })}
            {...(errors.name && {
              error: true,
              helperText: errors.name.message,
            })}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel}>Avbryt</Button>
        <Button type="submit">Legg til</Button>
      </DialogActions>
    </form>
  );
};
