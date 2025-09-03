import { CardMedia } from "@mui/material";
import { MuiFileInput, type MuiFileInputProps } from "mui-file-input";
import { useState } from "react";
import { toBase64 } from "./utils";

export interface FileInputProps
  extends Omit<MuiFileInputProps, "value" | "onChange"> {
  onChange?: (fileData: string) => void;
}

export const FileInput = ({ onChange, ...props }: FileInputProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <>
      <MuiFileInput
        value={file}
        onChange={async (file) => {
          setFile(file || undefined);
          // Base 64
          onChange?.((await toBase64(file!)) as string);
        }}
        {...props}
      />
      <CardMedia
        component="img"
        image={file ? URL.createObjectURL(file) : ""}
        sx={{
          width: "50%",
        }}
      />
    </>
  );
};
