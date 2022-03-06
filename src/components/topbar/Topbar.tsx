import { MainRoutes } from "@/api/routes/mainRoutes";
import retroidLogo from "@/assets/retroid_t.png";
import {
  AppBar,
  Avatar,
  Breadcrumbs,
  Toolbar,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Spacer } from "../layout/Spacer";
import { Clock } from "../widgets/Clock";

function BreadcrumbItem({
  crumbs,
  index,
}: {
  crumbs: string[];
  index: number;
}) {
  const toUrl = (path: string, crumb: string) => `${path}/${crumb}`;
  const label = crumbs[index];
  const to = crumbs.reduce(toUrl, "");

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
