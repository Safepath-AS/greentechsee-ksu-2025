import { MuiFileInput, type MuiFileInputProps } from "mui-file-input";
import { useState } from "react";
import { FileDataView } from "./FileDataView";

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
        onChange={(file) => {
          setFile(file || undefined);
          onChange?.(file ? URL.createObjectURL(file) : "");
        }}
        {...props}
      />
      <FileDataView value={file ? URL.createObjectURL(file) : ""} />
    </>
  );
};
