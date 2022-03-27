import { SvgIconComponent } from "@mui/icons-material";

export type SidebarItem = {
  key: string;
  label: string;
  link: string;
  icon: SvgIconComponent;
  activeIcon: SvgIconComponent;
};
