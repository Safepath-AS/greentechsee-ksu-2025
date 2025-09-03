import { Grid, Typography } from "@mui/material";
import { useDb } from "./db";
import { TagChip } from "./TagChip";

export const LabelCard = () => {
  const { tags } = useDb();
  return (
    <div>
      <Typography variant="h3" sx={{ fontSize: 25, marginTop: 4 }}>
        <b>Dine etikketer</b>
      </Typography>
      <Grid container spacing={1} sx={{ marginTop: 1 }}>
        {tags.map((tag) => (
          <Grid key={tag.id}>
            <TagChip tag={tag} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
