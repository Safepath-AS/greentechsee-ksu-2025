import { Button } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { type Db } from "./db";

export const ClearDbButton = () => {
  const [, setDb] = useLocalStorage<Db>("db");
  return (
    <Button variant="contained" color="error" onClick={() => setDb({})}>
      Tøm database
    </Button>
  );
};
