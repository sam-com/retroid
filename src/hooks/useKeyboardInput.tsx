import { store } from "@/redux/store";

import { useEffect } from "react";
import { throttle } from "throttle-debounce";

type UseKeyboardInputOptions = {
  delay?: number;
  repeat?: boolean;
  focusContainerId?: string | null;
  requireFocus?: boolean;
};

export function useKeyboardInput(
  key: KeyboardEvent["key"],
  callback: () => void,
  {
    delay = 75,
    repeat = false,
    focusContainerId = null,
    requireFocus = true,
  }: UseKeyboardInputOptions = {}
) {
  const keyboardListener = throttle(delay, true, (e: KeyboardEvent) => {
    const { inputsManager } = store.getState();

    if (requireFocus && inputsManager.focusContainerId !== focusContainerId) {
      return;
    }

    if (e.key !== key) return;
    if (!repeat && e.repeat) return;

    callback();
  });

  useEffect(() => {
    window.addEventListener("keydown", keyboardListener);

    return () => window.removeEventListener("keydown", keyboardListener);
  }, []);
}
