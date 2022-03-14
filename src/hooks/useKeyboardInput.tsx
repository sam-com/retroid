import { useEffect } from "react";
import { throttle } from "throttle-debounce";

export function useKeyboardInput(
  key: string,
  callback: () => void,
  delay: number = 75
) {
  useEffect(() => {
    const keyboardListener = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key !== key) return;
      callback();
    };

    window.addEventListener(
      "keydown",
      throttle(delay, false, keyboardListener)
    );

    return () => window.removeEventListener("keydown", keyboardListener);
  }, []);
}
