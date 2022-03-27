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
    label: "Home",
    link: MainRoutes.home,
  },
  {
    key: "games",
    icon: SportsEsportsOutlined,
    activeIcon: SportsEsports,
    label: "Games",
    link: MainRoutes.games,
  },
  {
    key: "consoles",
    icon: PanoramaWideAngle,
    activeIcon: PanoramaWideAngleSelect,
    label: "Platforms",
    link: MainRoutes.consoles,
  },
  {
    key: "recent",
    icon: WatchLaterOutlined,
    activeIcon: WatchLater,
    label: "Recent",
    link: MainRoutes.recent,
  },
  {
    key: "favorites",
    icon: FolderSpecialOutlined,
    activeIcon: FolderSpecial,
    label: "Favorites",
    link: MainRoutes.favorites,
  },
];

export const secondarySidebarItems: SidebarItem[] = [
  {
    key: "power",
    icon: PowerSettingsNew,
    activeIcon: SettingsPower,
    label: "Power",
    link: MainRoutes.power,
  },
  {
    key: "settings",
    icon: SettingsOutlined,
    activeIcon: Settings,
    label: "Settings",
    link: MainRoutes.settings,
  },
];

const allSidebarItems = [...mainSidebarItems, ...secondarySidebarItems];

export const sidebarItemKeys = allSidebarItems.map(({ key }) => key);
