import { MainRoutes } from "@/api/routes/mainRoutes";
import {
  SettingsOutlined,
  Settings,
  PowerSettingsNew,
  SportsEsports,
  SportsEsportsOutlined,
  WatchLaterOutlined,
  WatchLater,
  SettingsPower,
  FolderSpecialOutlined,
  FolderSpecial,
  HomeOutlined,
  Home,
  PanoramaWideAngle,
  PanoramaWideAngleSelect,
} from "@mui/icons-material";
import { SidebarItem } from "./types";

export const mainSidebarItems: SidebarItem[] = [
  {
    key: "home",
    icon: HomeOutlined,
    activeIcon: Home,
    link: MainRoutes.home,
  },
  {
    key: "games",
    icon: SportsEsportsOutlined,
    activeIcon: SportsEsports,
    link: MainRoutes.games,
  },
  {
    key: "consoles",
    icon: PanoramaWideAngle,
    activeIcon: PanoramaWideAngleSelect,
    link: MainRoutes.consoles,
  },
  {
    key: "recent",
    icon: WatchLaterOutlined,
    activeIcon: WatchLater,
    link: MainRoutes.recent,
  },
  {
    key: "favorites",
    icon: FolderSpecialOutlined,
    activeIcon: FolderSpecial,
    link: MainRoutes.favorites,
  },
];

export const secondarySidebarItems: SidebarItem[] = [
  {
    key: "power",
    icon: PowerSettingsNew,
    activeIcon: SettingsPower,
    link: MainRoutes.power,
  },
  {
    key: "settings",
    icon: SettingsOutlined,
    activeIcon: Settings,
    link: MainRoutes.settings,
  },
];

const allSidebarItems = [...mainSidebarItems, ...secondarySidebarItems];

export const sidebarItemKeys = allSidebarItems.map(({ key }) => key);
