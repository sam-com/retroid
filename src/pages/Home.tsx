import { Avatar, Box } from "@mui/material";
import retroidLogo from "@/assets/retroid_t.png";

export const HomeBreadcrumb = () => (
  <Avatar variant="square" src={retroidLogo} sx={{ width: 48, height: 36 }} />
);

export function Home() {
  return (
    <Box>
      <p>Home Page</p>
    </Box>
  );
}
