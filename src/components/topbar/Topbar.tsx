import { MainRoutes } from "@/api/routes/mainRoutes";
import retroidLogo from "@/assets/retroid_t.png";
import { NavigateNext } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Breadcrumbs,
  Toolbar,
  Link,
  Typography,
  capitalize,
} from "@mui/material";
import { Link as RouterLink, useLocation, useMatch } from "react-router-dom";
import { Spacer } from "../layout/Spacer";
import { roms } from "../RomList/roms";
import { Clock } from "../widgets/Clock";

function BreadcrumbItem({
  crumbs,
  index,
}: {
  crumbs: string[];
  index: number;
}) {
  const match = useMatch("/games/:romId");
  let custom;

  if (match?.params.romId && crumbs[index] === match.params.romId) {
    console.log("match!");
    custom = roms.find((rom) => rom.id === match.params.romId)?.name;
  }

  const toUrl = (path: string, crumb: string) => `${path}/${crumb}`;
  const label = custom || capitalize(crumbs[index]);
  const to = crumbs.slice(0, index + 1).reduce(toUrl, "");

  return (
    <Link component={RouterLink} to={to} color="inherit" underline="hover">
      <Typography variant="h6" sx={{ userSelect: "none" }}>
        {label}
      </Typography>
    </Link>
  );
}

export function Topbar() {
  const location = useLocation();

  const crumbs = location.pathname.split("/").filter((crumb) => crumb?.length);

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext aria-hidden />}
        >
          <Link
            component={RouterLink}
            to={MainRoutes.home}
            underline="hover"
            color="inherit"
          >
            <Avatar
              variant="square"
              src={retroidLogo}
              sx={{ width: 48, height: 36 }}
            />
          </Link>
          {crumbs.map((crumb, index) => (
            <BreadcrumbItem key={crumb} crumbs={crumbs} index={index} />
          ))}
        </Breadcrumbs>
        <Spacer direction="horizontal" />
        <div className="gap-1 flex items-center">
          <Clock />
        </div>
      </Toolbar>
    </AppBar>
  );
}
