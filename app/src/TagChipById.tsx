import { Chip } from "@mui/material";
import { useDb } from "./db";

export interface TagChipByIdProps {
  tagId: string;
}

export const TagChipById = ({ tagId }: TagChipByIdProps) => {
  const { tags } = useDb();
  const tag = tags.find((t) => t.id === tagId);
  if (!tag) {
    return <Chip label="Ukjent tag" size="small" />;
  }
  return <Chip label={tag.name} size="small" />;
};
