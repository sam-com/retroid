import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Tab,
  Tabs,
  Badge,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import avatarImg from "@/assets/avatar.png";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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
        <StyledBadge
          color="success"
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={avatarImg} sx={{ bgcolor: "primary.main" }} />
        </StyledBadge>

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
