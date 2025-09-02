import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

export interface ErrorProviderProps {
  children: React.ReactNode;
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const messageRef = useRef("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onError = (message: string) => {
      setOpen(true);
      messageRef.current = message.split(":")[1].trim() || "Ukjent feil";
    };

    const handleError = (event: ErrorEvent) => {
      event.preventDefault();
      onError(event.message);
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();
      onError(event.reason?.toString() || "Ukjent feil");
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  });

  return (
    <>
      {children}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Uheldig</DialogTitle>
        <DialogContent>{messageRef.current}</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Greit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
