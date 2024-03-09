import { useState } from "react";

export const useErrorBoundary = () => {
  const [error, setError] = useState<Error>();

  if (error) {
    throw error;
  }

  return setError;
};
