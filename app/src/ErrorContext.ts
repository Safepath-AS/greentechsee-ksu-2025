import { createContext } from "react";

export const ErrorContext = createContext<{
  showError: (message: string) => void;
} | null>(null);
