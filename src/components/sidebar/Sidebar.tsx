import { Avatar, Box, Divider, Drawer, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialActiveItem = sidebarItemKeys.find((key) =>
    location.pathname.includes(key)
  );

  const [activeItem, setActiveItem] = useState(initialActiveItem);

  const handleChangeActiveItem = (item: SidebarItem) => {
    setActiveItem(item.key);
    navigate(item.link);
  };

  return (
    <Drawer variant="persistent" anchor="left" sx={{ width: "90px" }} open>
      <Box className="flex flex-col grow items-center pt-4 overflow-hidden">
        <Avatar sx={{ color: "success.main" }} />
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
