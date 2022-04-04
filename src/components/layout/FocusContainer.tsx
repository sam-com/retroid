import { useKeyboardInput } from "@/hooks/useKeyboardInput";
import Box from "@mui/material/Box";
import { ReactNode, useRef } from "react";

type Key = KeyboardEvent["key"];
type InputHandler = { handler: () => void; repeat: boolean };
type InputHandlers = { [key: Key]: InputHandler };

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
  Object.entries(inputHandlers).forEach(([key, { handler, repeat }]) =>
    useKeyboardInput(key, handler, { focusContainerId, repeat })
  );
};

const useContainerFocus = () => {
  const ref = useRef<HTMLElement>(null);
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
