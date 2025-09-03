import { Grid } from "@mui/material";
import { useDb } from "./db";
import { TagChip } from "./TagChip";

export type TagFilterProps = {
  tagIds: string[];
  onChange?: (newTagIds: string[]) => void;
};

export const TagFilter = ({ tagIds, onChange }: TagFilterProps) => {
  const { tags } = useDb();
  return (
    <Grid container spacing={1} sx={{ marginTop: 1 }}>
      {tags.map((tag) => (
        <Grid key={tag.id}>
          <TagChip
            tag={tag}
            selected={tagIds.includes(tag.id)}
            onClick={() => {
              if (tagIds.includes(tag.id)) {
                onChange?.(tagIds.filter((t) => t !== tag.id));
              } else {
                onChange?.([...(tagIds || []), tag.id]);
              }
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
