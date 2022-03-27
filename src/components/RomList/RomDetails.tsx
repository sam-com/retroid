import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BgContainer } from "../layout/BgContainer";

const detailFields = [
  "Release Date",
  "Developer",
  "Publisher",
  "Genre",
  "Platform",
  "Last Played",
  "Times Played",
];

const detailValues = [
  "1999",
  "Rare",
  "Nintendo",
  "Platform",
  "Super Nintendo",
  "Last week",
  "25",
];

export function RomDetails() {
  return (
    <BgContainer className="p-8 overflow-hidden">
      {detailFields.map((field, index) => (
        <Box className="flex gap-4">
          <Typography
            key={field}
            variant="body1"
            fontWeight="bold"
            color="text.primary"
          >
            {field}:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {detailValues[index]}
          </Typography>
        </Box>
      ))}
    </BgContainer>
  );
}
