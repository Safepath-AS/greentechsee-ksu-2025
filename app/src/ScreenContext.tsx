import { createContext } from "react";

export type ScreenContextData = {
  addProductDialogOpen: boolean;
  setAddProductDialogOpen: (open: boolean) => void;
  addTagDialogOpen: boolean;
  setAddTagDialogOpen: (open: boolean) => void;
};

export const ScreenContext = createContext<ScreenContextData>({
  addProductDialogOpen: false,
  setAddProductDialogOpen: () => {},
  addTagDialogOpen: false,
  setAddTagDialogOpen: () => {},
});
