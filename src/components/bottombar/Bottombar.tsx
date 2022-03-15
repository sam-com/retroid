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
  text,
}: {
  icon: SvgIconComponent;
  text: string;
}) {
  return (
    <Typography
      className="flex gap-1"
      color="text.primary"
      sx={{ userSelect: "none" }}
    >
      <Icon />
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
          <ControlOption icon={Circle} text="Open" />
          <ControlOption icon={Circle} text="Go Back" />
          <ControlOption icon={RemoveCircle} text="Menu Bar" />
          <ControlOption icon={AddCircle} text="Options" />
        </Stack>
      </Toolbar>
    </Box>
  );
}
