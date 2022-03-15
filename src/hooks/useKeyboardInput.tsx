import { useEffect } from "react";
import { throttle } from "throttle-debounce";

type UseKeyboardInputOptions = {
  delay?: number;
  once?: boolean;
};

export function useKeyboardInput(
  key: string,
  callback: () => void,
  { delay = 75, once = false }: UseKeyboardInputOptions = {}
) {
  const keyboardListener = throttle(delay, false, (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key !== key) return;
    callback();
  });

  useEffect(() => {
    window.addEventListener("keydown", keyboardListener, { once });

    return () => window.removeEventListener("keydown", keyboardListener);
  }, [keyboardListener]);
}
