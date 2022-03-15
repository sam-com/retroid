import { Consoles } from "@/pages/Console";
import { Games } from "@/pages/Games";
import { Home } from "@/pages/Home";
import { Play } from "@/pages/Play";
import { ReactNode } from "react";

export type AppRoute = { path: string; element: ReactNode };

export const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "games/:romId",
    element: <Play />,
  },
  {
    path: "consoles",
    element: <Consoles />,
  },
];
