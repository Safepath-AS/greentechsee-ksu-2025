export interface FileDataViewProps {
  value: string;
}

export const FileDataView = ({ value }: FileDataViewProps) => {
  return <img src={value} alt="Uploaded file" style={{ maxWidth: "100%" }} />;
};
