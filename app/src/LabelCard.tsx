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
            all: "unset",
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            fontSize: "90%",
          }}
        >
          Kjøkken
        </Button>
        <Button
          sx={{
            all: "unset",
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            fontSize: "90%",
          }}
        >
          Bad
        </Button>
        <Button
          sx={{
            all: "unset",
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            fontSize: "90%",
          }}
        >
          Garasje
        </Button>
        <Button
          sx={{
            all: "unset",
            marginRight: 1,
            paddingRight: 1,
            paddingLeft: 1,
            paddingTop: 0.5,
            paddingBottom: 0.5,
            borderStyle: "solid",
            borderRadius: 4,
            borderWidth: 1,
            cursor: "pointer",
            fontSize: "90%",
          }}
        >
          Stue
        </Button>
      </Typography>
    </div>
  );
};
