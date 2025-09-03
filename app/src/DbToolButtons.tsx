import { Button, Stack } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { type Db } from "./db";

export const DbToolButtons = () => {
  const [db, setDb] = useLocalStorage<Db>("db");
  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: 2, marginBottom: 4 }}>
      <Button
        color="primary"
        onClick={() => {
          const data = JSON.stringify(db);
          window.navigator.clipboard.writeText(data);
        }}
      >
        Eksporter
      </Button>
      <Button
        color="primary"
        onClick={() => {
          const data = prompt("Lim inn eksport av db:");
          if (data) {
            try {
              const parsed = JSON.parse(data);
              setDb(parsed);
            } catch (e) {
              alert(
                "Feil ved import: " +
                  (e instanceof Error ? e.message : String(e))
              );
            }
          }
        }}
      >
        Importer
      </Button>
      <Button color="error" onClick={() => setDb({})}>
        Tøm
      </Button>
    </Stack>
  );
};
