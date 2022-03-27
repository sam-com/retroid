import { useBreadcrumbs, BreadcrumbItem } from "@/routing/useBreadcrumbs";
import { NavigateNext } from "@mui/icons-material";
import { AppBar, Breadcrumbs, Toolbar, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Spacer } from "../layout/Spacer";
import { Clock } from "../widgets/Clock";

const toBreadcrumbItem = (crumb: BreadcrumbItem) => (
  <Breadcrumb key={crumb.key} crumb={crumb} />
);

const Breadcrumb = ({ crumb }: { crumb: BreadcrumbItem }) => (
  <Link component={RouterLink} to={crumb.to} color="inherit" underline="hover">
    <Typography variant="h6" fontWeight="bold" sx={{ userSelect: "none" }}>
      {crumb.item}
    </Typography>
  </Link>
);

const TopBarRight = () => {
  return (
    <div className="gap-1 flex items-center">
      <Clock />
    </div>
  );
};

const TopBarLeft = () => {
  const breadcrumbs = useBreadcrumbs();
  const breadcrumbItems = breadcrumbs.map(toBreadcrumbItem);
  const separator = <NavigateNext aria-hidden />;

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={separator}>
      {breadcrumbItems}
    </Breadcrumbs>
  );
};

export const Topbar = () => {
  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <TopBarLeft />
        <Spacer direction="horizontal" />
        <TopBarRight />
      </Toolbar>
    </AppBar>
  );
};
