import { useState } from "react";

export default function useLoading() {
  const [isLoaded, setIsLoaded] = useState(false);

  return {
    isLoaded,
    setIsLoaded
  }
}