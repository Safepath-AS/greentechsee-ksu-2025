import AddIcon from "@mui/icons-material/Add";
import { Chip, Grid } from "@mui/material";
import { useDb } from "./db";

const TAG_NAMES = [
  "Elektronikk",
  "Møbler",
  "Klær",
  "Bøker",
  "Verktøy",
  "Kjøkkenutstyr",
  "Sport og fritid",
  "Leker",
  "Hageutstyr",
  "Kontorrekvisita",
  "Helse og skjønnhet",
  "Musikkutstyr",
  "Kunst og håndverk",
  "Samleobjekter",
  "Kjøretøy",
  "Hus og hjem",
  "Reiseutstyr",
  "Babyutstyr",
  "Dyr og kjæledyr",
  "Gaver og suvenirer",
  "Sesongartikler",
  "Verneutstyr",
  "Elektriske apparater",
  "Verktøy og maskiner",
  "Hobby og fritid",
  "Musikk og filmer",
  "Spill og konsoller",
  "Fotoutstyr",
  "Datatilbehør",
  "Mobiltilbehør",
  "Smart hjem-enheter",
  "Belysning",
  "Sikkerhetsutstyr",
  "Helseovervåkingsenheter",
  "Fitnessutstyr",
  "Utendørsutstyr",
  "Campingutstyr",
  "Fiskeutstyr",
  "Sykkelutstyr",
  "Vannsportutstyr",
  "Vintersportutstyr",
  "Turistutstyr",
  "Musikkinstrumenter",
  "Lydutstyr",
  "DJ-utstyr",
  "Studio- og opptaksutstyr",
  "Scenekunstutstyr",
  "Kostymer og rekvisitter",
  "Partytilbehør",
  "Bryllupsutstyr",
  "Eventutstyr",
  "Fotoutstyr",
  "Videoutstyr",
  "Droner og tilbehør",
  "3D-utskriftutstyr",
  "Robotikk og elektronikkprosjekter",
  "Læringsverktøy og pedagogiske materialer",
  "Språk- og oversettelsesverktøy",
  "Programvare og apper",
];

export interface TagsInputProps {
  value?: string[];
  onChange: (tagIds?: string[]) => void;
}

export const TagsInput = ({ value, onChange }: TagsInputProps) => {
  const { tags, addTag } = useDb();

  return (
    <>
      <Grid container spacing={1} direction="row">
        {tags.map((tag) => (
          <Grid key={tag.id}>
            <Chip
              variant={value?.includes(tag.id) ? "filled" : "outlined"}
              key={tag.id}
              label={tag.name}
              onClick={() => {
                if (value?.includes(tag.id)) {
                  onChange(value?.filter((t) => t !== tag.id));
                } else {
                  onChange([...(value || []), tag.id]);
                }
              }}
            />
          </Grid>
        ))}
        <Grid>
          <Chip
            icon={<AddIcon fontSize="small" />}
            label="Legg til"
            onClick={() =>
              addTag({
                name: TAG_NAMES[Math.floor(Math.random() * TAG_NAMES.length)],
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
};
