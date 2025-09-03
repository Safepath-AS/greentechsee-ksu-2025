import { CardMedia, Paper, Typography } from "@mui/material";
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
      <Paper
        component="label"
        htmlFor="fileInput"
        variant="outlined"
        sx={{
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderColor: (theme) => theme.palette.grey[400],
        }}
      >
        {file ? (
          <CardMedia
            component="img"
            image={file ? URL.createObjectURL(file) : ""}
            sx={{
              width: "50%",
            }}
          />
        ) : (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
            }}
            onDragEnter={(e) => {
              e.preventDefault();
            }}
          >
            Last opp fil
          </Typography>
        )}
      </Paper>
      {/* @ts-expect-error Idiot library */}
      <MuiFileInput
        id="fileInput"
        value={file}
        onChange={async (file) => {
          setFile(file || undefined);
          // Base 64
          onChange?.((await toBase64(file!)) as string);
        }}
        {...props}
      />
    </>
  );
};
