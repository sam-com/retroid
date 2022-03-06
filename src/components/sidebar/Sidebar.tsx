import { Avatar, Box, Divider, Drawer, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Spacer } from "../layout/Spacer";
import {
  mainSidebarItems,
  secondarySidebarItems,
  sidebarItemKeys,
} from "./sidebarItems";
import { SidebarItem } from "./types";

type SidebarMenuItemProps = {
  item: SidebarItem;
  onClick: (item: SidebarItem) => void;
  active: boolean;
};

function getTab({ active, item, onClick }: SidebarMenuItemProps) {
  const Icon = active ? item.activeIcon : item.icon;

  return (
    <Tab
      key={item.key}
      value={item.key}
      icon={<Icon fontSize="large" />}
      onClick={() => onClick(item)}
    />
  );
}

const findActiveItem = (pathname: string) =>
  sidebarItemKeys.find((key) => pathname.includes(key)) || sidebarItemKeys[0];

function useActiveTab() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>(
    findActiveItem(location.pathname)
  );

  useEffect(() => {
    const newActive = findActiveItem(location.pathname);
    setActiveItem(newActive);
  }, [location]);

  return activeItem;
}

export function Sidebar() {
  const navigate = useNavigate();
  const activeItem = useActiveTab();

  const handleChangeActiveItem = (item: SidebarItem) => navigate(item.link);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: "90px" }}
      elevation={0}
    >
      <Box className="flex flex-col grow items-center pt-4 overflow-hidden">
        <Avatar sx={{ bgcolor: "primary.main" }} />
        <Divider sx={{ margin: "16px 0" }} />
        <Tabs
          value={activeItem}
          orientation="vertical"
          variant="scrollable"
          aria-label="tabs"
          classes={{
            root: "grow",
            indicator: "left-0 bg-green-50",
            flexContainerVertical: "h-full",
          }}
        >
          {mainSidebarItems.map((mainItem) =>
            getTab({
              active: activeItem === mainItem.key,
              item: mainItem,
              onClick: handleChangeActiveItem,
            })
          )}
          <Spacer direction="vertical" />
          {secondarySidebarItems.map((secondaryItem) =>
            getTab({
              active: activeItem === secondaryItem.key,
              item: secondaryItem,
              onClick: handleChangeActiveItem,
            })
          )}
        </Tabs>
      </Box>
    </Drawer>
  );
}
