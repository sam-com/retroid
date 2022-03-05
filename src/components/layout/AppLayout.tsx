import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";

type AppLayoutProps = {
  left: ReactNode;
  top: ReactNode;
  bottom: ReactNode;
  children: ReactNode;
};

const AppLayoutContainer = (props: { children: ReactNode }) => (
  <Box
    className="flex w-screen h-screen overflow-hidden"
    sx={{
      background: "linear-gradient(90deg, #1e3c65, #0f1e33)",
    }}
  >
    {props.children}
  </Box>
);

const CenterContainer = (props: { children: ReactNode }) => (
  <div className="flex grow overflow-hidden">{props.children}</div>
);
const RightContainer = (props: {
  top: ReactNode;
  center: ReactNode;
  bottom: ReactNode;
}) => (
  <div className="flex grow flex-col">
    {props.top}
    <CenterContainer>{props.center}</CenterContainer>
    {props.bottom}
  </div>
);

export function AppLayout(props: AppLayoutProps) {
  return (
    <AppLayoutContainer>
      {props.left}
      <RightContainer
        top={props.top}
        center={props.children}
        bottom={props.bottom}
      />
    </AppLayoutContainer>
  );
}
