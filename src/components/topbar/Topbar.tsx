import { MainRoutes } from "@/api/routes/mainRoutes";
import retroidLogo from "@/assets/retroid_t.png";
import {
  AppBar,
  Avatar,
  Breadcrumbs,
  Toolbar,
  Link,
  Typography,
  capitalize,
} from "@mui/material";
import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";
import { Spacer } from "../layout/Spacer";
import { Clock } from "../widgets/Clock";

function BreadcrumbItem({
  location,
  crumbs,
  index,
}: {
  location: any;
  crumbs: string[];
  index: number;
}) {
  const params = matchPath(location.pathname, location.pathname);
  console.log(params);

  const toUrl = (path: string, crumb: string) => `${path}/${crumb}`;
  const label = capitalize(crumbs[index]);
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

  const crumbs = location.pathname.split("/").splice(1);

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            component={RouterLink}
            to={MainRoutes.home}
            underline="hover"
            color="inherit"
          >
            <Avatar
              variant="square"
              src={retroidLogo}
              sx={{ width: 56, height: 48 }}
            />
          </Link>
          {crumbs.map((crumb, index) => (
            <BreadcrumbItem
              key={crumb}
              crumbs={crumbs}
              index={index}
              location={location}
            />
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
