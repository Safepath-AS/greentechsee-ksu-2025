import { Chip } from "@mui/material";
import type { Tag } from "./db";

export interface TagChipProps {
  tag: Tag;
}

export const TagChip = ({ tag }: TagChipProps) => {
  return <Chip label={tag.name} size="small" />;
};
