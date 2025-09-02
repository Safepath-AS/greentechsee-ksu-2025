import { Dialog, useMediaQuery, type DialogProps } from "@mui/material";
import { CONTAINER_MAX_WIDTH } from "./App";

export interface WindowDialogProps {
  open: DialogProps["open"];
  onClose: DialogProps["onClose"];
  maxWidth?: DialogProps["maxWidth"];
  children: React.ReactNode;
}

export const WindowDialog = ({
  open,
  onClose,
  maxWidth = "md",
  children,
}: WindowDialogProps) => {
  const desktop = useMediaQuery((theme) =>
    theme.breakpoints.up(CONTAINER_MAX_WIDTH)
  );
  return (
    <Dialog
      {...(desktop
        ? {
            fullWidth: true,
            maxWidth,
          }
        : {
            fullScreen: true,
          })}
      open={open}
      onClose={onClose}
    >
      {children}
    </Dialog>
  );
};
