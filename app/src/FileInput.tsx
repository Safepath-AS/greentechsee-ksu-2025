import { CardMedia } from "@mui/material";
import { MuiFileInput, type MuiFileInputProps } from "mui-file-input";
import { useState } from "react";

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

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
