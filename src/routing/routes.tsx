import { Consoles } from "@/pages/Console";
import { Games } from "@/pages/Games";
import { Home, HomeBreadcrumb } from "@/pages/Home";
import { Play, PlayBreadcrumb } from "@/pages/Play";
import { ReactNode } from "react";
import { Navigate, RouteObject } from "react-router-dom";

export type RetroidRoute = RouteObject & {
  breadcrumb?: (crumb: string) => ReactNode;
};

export const routes: RetroidRoute[] = [
  {
    path: "/",
    element: <Home />,
    breadcrumb: HomeBreadcrumb,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "games/:romId",
    element: <Play />,
    breadcrumb: PlayBreadcrumb,
  },
  {
    path: "consoles",
    element: <Consoles />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export const routePatterns = routes.map(({ path }) => path);
