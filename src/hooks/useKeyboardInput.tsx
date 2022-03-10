import { useEffect } from "react";

export function useKeyboardInput(key: string, callback: () => void) {
  const keyboardListener = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key !== key) return;
    callback();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyboardListener);

    return () => window.removeEventListener("keydown", keyboardListener);
  }, [keyboardListener]);
}
