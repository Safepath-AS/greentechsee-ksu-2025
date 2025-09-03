import { Grid, Typography } from "@mui/material";
import { useDb } from "./db";
import { TagChip } from "./TagChip";

export type TagFilterProps = {
  tagIds: string[];
  onChange?: (newTagIds: string[]) => void;
};

export const TagFilter = ({ tagIds, onChange }: TagFilterProps) => {
  const { tags } = useDb();
  return (
    <div>
      <Typography variant="h3" sx={{ fontSize: 25, marginTop: 4 }}>
        <b>Dine etikketer</b>
      </Typography>
      {tags.length ? (
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
      ) : (
        <Typography
          variant="h6"
          sx={{ fontSize: 13.5, color: "gray", marginTop: 1 }}
        >
          Du har ingen etikketer ennå. Legg til noen når du legger til
          produkter.
        </Typography>
      )}
    </div>
  );
};
