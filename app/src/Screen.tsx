import { useContext } from "react";
import { ScreenContext } from "./ScreenContext";
import { WindowDialog } from "./WindowDialog";
import { AddProductScreen } from "./screens/AddProductScreen";
import { AddTagScreen } from "./screens/AddTagScreen";
import { HomeScreen } from "./screens/HomeScreen";

export const Screen = () => {
  const {
    addProductDialogOpen,
    setAddProductDialogOpen,
    addTagDialogOpen,
    setAddTagDialogOpen,
  } = useContext(ScreenContext);

  return (
    <>
      <HomeScreen />
      <WindowDialog
        open={addProductDialogOpen}
        onClose={() => setAddProductDialogOpen(false)}
      >
        <AddProductScreen onClose={() => setAddProductDialogOpen(false)} />
      </WindowDialog>
      <WindowDialog
        open={addTagDialogOpen}
        onClose={() => setAddTagDialogOpen(false)}
      >
        <AddTagScreen onClose={() => setAddTagDialogOpen(false)} />
      </WindowDialog>
    </>
  );
};
