import { useKeyboardInput } from "@/hooks/useKeyboardInput";
import Box from "@mui/material/Box";
import { ReactNode, RefObject, useEffect, useRef } from "react";

type Key = KeyboardEvent["key"];
type InputHandlers = { [key: Key]: () => void };

type FocusContainerProps = {
  children: ReactNode;
  inputHandlers?: InputHandlers;
  focusContainerId?: string;
  className?: string;
};

const useRegisterInputHandlers = (
  inputHandlers: InputHandlers = {},
  focusContainerId?: string
) => {
  Object.entries(inputHandlers).forEach(([key, inputHandler]) =>
    useKeyboardInput(key, inputHandler, { focusContainerId })
  );
};

const useContainerFocus = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => ref?.current?.focus(), [ref]);
  return ref;
};

export function FocusContainer(props: FocusContainerProps) {
  const boxRef = useContainerFocus();
  useRegisterInputHandlers(props.inputHandlers, props.focusContainerId);

  return (
    <Box
      ref={boxRef}
      sx={{ outline: "none" }}
      tabIndex={0}
      className={props.className}
    >
      {props.children}
    </Box>
  );
}
