import { useEffect, useRef, useState } from "react";

type UseStateRefOutput<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  React.MutableRefObject<T>
];

export function useStateRef<T>(initialState: T): UseStateRefOutput<T> {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return [state, setState, ref];
}
