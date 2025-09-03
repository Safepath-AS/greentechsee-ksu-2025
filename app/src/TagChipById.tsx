import { Chip } from "@mui/material";
import { useDb } from "./db";
import { TagChip, type TagChipProps } from "./TagChip";

export interface TagChipByIdProps extends Omit<TagChipProps, "tag"> {
  tagId: string;
}

export const TagChipById = ({ tagId, ...props }: TagChipByIdProps) => {
  const { tags } = useDb();
  const tag = tags.find((t) => t.id === tagId);
  if (!tag) {
    return <Chip label="Ukjent tag" size="small" />;
  }
  return <TagChip tag={tag} {...props} />;
};
