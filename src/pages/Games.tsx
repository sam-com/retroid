import { RomList } from "@/components/RomList/RomList";
import { Box } from "@mui/material";

export function Games() {
  return (
    <Box className="flex flex-grow m-6">
      <RomList />
    </Box>
  );
}
