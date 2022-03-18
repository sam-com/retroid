import { capitalize } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import { RetroidRoute, routes } from "./routes";

export type BreadcrumbItem = {
  key: string;
  to: string;
  item: ReactNode;
};

const byNotEmpty = (crumb: string) => !!crumb.length;
const toUrl = (path: string, crumb: string) => `${path}/${crumb}`;
const defaultBreadcrumb = (crumb: string) => capitalize(crumb);
const getMatchingRoute = (path: string): RetroidRoute =>
  matchRoutes(routes, path)?.[0]?.route ?? {};

const toBreadcrumb =
  (urlSections: string[]) => (urlSection: string, index: number) => {
    const crumbPath = urlSections.slice(0, index + 1).reduce(toUrl);
    const { breadcrumb = defaultBreadcrumb } = getMatchingRoute(crumbPath);

    return {
      to: crumbPath,
      item: breadcrumb(urlSection),
      key: urlSection,
    };
  };

function generateBreadcrumbs(pathname: string) {
  const crumbPaths = [""];
  crumbPaths.push(...pathname.split("/").filter(byNotEmpty));
  return crumbPaths.map(toBreadcrumb(crumbPaths));
}

export function useBreadcrumbs(): BreadcrumbItem[] {
  const { pathname } = useLocation();
  return generateBreadcrumbs(pathname);
}
