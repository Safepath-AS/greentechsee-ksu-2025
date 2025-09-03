import { Chip, type ChipProps } from "@mui/material";
import type { Tag } from "./db";

export interface TagChipProps extends Omit<ChipProps, "label"> {
  tag: Tag;
  selected?: boolean;
}

export const TagChip = ({ tag, selected = false, ...props }: TagChipProps) => {
  return (
    <Chip
      label={tag.name}
      size="small"
      variant={selected ? "filled" : "outlined"}
      {...props}
    />
  );
};
