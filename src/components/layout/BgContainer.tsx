import { Box } from "@mui/material";
import { ReactNode } from "react";
import classNames from "classnames";

export function BgContainer(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Box className={classNames("relative w-full h-full", props.className)}>
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg pointer-events-none" />
      {props.children}
    </Box>
  );
}
