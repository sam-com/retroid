import {
  AddCircle,
  Circle,
  RemoveCircle,
  SvgIconComponent,
} from "@mui/icons-material";
import { Box, Divider, Stack, Toolbar, Typography } from "@mui/material";
import { Spacer } from "../layout/Spacer";

function ControlOption({
  icon: Icon,
  color,
  text,
}: {
  color?: any;
  icon: SvgIconComponent;
  text: string;
}) {
  return (
    <Typography
      className="flex gap-1"
      color="text.primary"
      fontWeight="bold"
      sx={{ userSelect: "none" }}
    >
      <Icon color={color || "info"} />
      {text}
    </Typography>
  );
}

export function Bottombar() {
  return (
    <Box className="px-6">
      <Divider orientation="horizontal" />
      <Toolbar>
        <Spacer direction="horizontal" />
        <Stack spacing={3} direction="row">
          <ControlOption icon={Circle} text="Open" color="success" />
          <ControlOption icon={Circle} text="Go Back" color="error" />
          <ControlOption icon={RemoveCircle} text="Menu Bar" color="primary" />
          <ControlOption icon={AddCircle} text="Options" color="primary" />
        </Stack>
      </Toolbar>
    </Box>
  );
}
