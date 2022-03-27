import { store } from "@/redux/store";

import { useEffect } from "react";
import { throttle } from "throttle-debounce";

type UseKeyboardInputOptions = {
  delay?: number;
  once?: boolean;
  focusContainerId?: string | null;
  requireFocus?: boolean;
};

export function useKeyboardInput(
  key: KeyboardEvent["key"],
  callback: () => void,
  {
    delay = 75,
    once = false,
    focusContainerId = null,
    requireFocus = true,
  }: UseKeyboardInputOptions = {}
) {
  const keyboardListener = throttle(delay, false, (e: KeyboardEvent) => {
    e.preventDefault();

    const { inputsManager } = store.getState();

    if (requireFocus && inputsManager.focusContainerId !== focusContainerId) {
      return;
    }

    if (e.key !== key) return;
    callback();
  });

  useEffect(() => {
    window.addEventListener("keydown", keyboardListener, { once });

    return () => window.removeEventListener("keydown", keyboardListener);
  }, []);
}
