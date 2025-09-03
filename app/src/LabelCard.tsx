import { Typography, Button } from "@mui/material";

export const LabelCard = () => {
  return (
    <div>
      <Typography variant="h3" sx={{ fontSize: 25, marginTop: 4 }}>
        <b>Dine etikketer</b>
      </Typography>
      {/* Buttons */}
      <Typography sx={{ paddingTop: 2 }}>
        <Button
          sx={{
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            color: "unset",
          }}
        >
          Kjøkken
        </Button>
        <Button
          sx={{
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            color: "unset",
          }}
        >
          Bad
        </Button>
        <Button
          sx={{
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            color: "unset",
          }}
        >
          Garasje
        </Button>
        <Button
          sx={{
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            color: "unset",
          }}
        >
          Stue
        </Button>
      </Typography>
    </div>
  );
};
