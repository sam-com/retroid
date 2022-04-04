import {
  Avatar,
  Divider,
  Drawer as MuiDrawer,
  Tab,
  Tabs,
  Badge,
  styled,
  Theme,
  CSSObject,
  Typography,
  Box,
} from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import avatarImg from "@/assets/avatar.png";

import { Spacer } from "../layout/Spacer";
import {
  mainSidebarItems,
  secondarySidebarItems,
  sidebarItemKeys,
} from "./sidebarItems";
import { SidebarItem } from "./types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FocusContainer } from "../layout/FocusContainer";
import { toggleSidebarFocus } from "@/api/utils/inputManager/inputsManagerSlice";
import { useKeyboardInput } from "@/hooks/useKeyboardInput";
import { useStateRef } from "@/hooks/useStateRef";
import { useSound } from "@/hooks/useSound";

type SidebarMenuItemProps = {
  item: SidebarItem;
  onClick: (item: SidebarItem) => void;
  active: boolean;
};

const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minHeight: "48px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    display: "flex",
    gap: "10px",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "rgba(211, 211, 211, 0.25)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(211, 211, 211, 0.25)",
    },
  })
);

function getTab({ active, item, onClick }: SidebarMenuItemProps) {
  const Icon = active ? item.activeIcon : item.icon;

  return (
    <StyledTab
      key={item.key}
      value={item.key}
      label={item.label}
      icon={<Icon fontSize="large" />}
      iconPosition="start"
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

const openedMixin = (theme: Theme): CSSObject => ({
  width: 240,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: 70,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: 240,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiTabs-indicator": {
    left: 0,
    width: 4,
    borderRadius: 8,
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const findActiveItem = (pathname: string) =>
  sidebarItemKeys.find((key) => pathname.includes(key)) || sidebarItemKeys[0];

const findActiveItemIndex = (pathname: string) =>
  sidebarItemKeys.findIndex((key) => pathname.includes(key)) || 0;

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

function useSidebarExpanded(drawerRef: RefObject<HTMLButtonElement>) {
  const [expanded, setExpanded, expandedRef] = useStateRef(false);
  const dispatch = useAppDispatch();
  const [playExpand] = useSound("expand.m4a");
  const [playCollapse] = useSound("collapse.m4a");

  const handleToggleSidebar = () => {
    if (expandedRef.current) playCollapse();
    else playExpand();

    dispatch(toggleSidebarFocus());
  };

  useKeyboardInput("m", handleToggleSidebar, {
    requireFocus: false,
    delay: 200,
  });

  const { focusContainerId } = useAppSelector((state) => state.inputsManager);
  useEffect(() => {
    const _expanded = focusContainerId === "sidebarId";
    setExpanded(_expanded);

    const selectedTabNode = drawerRef.current?.querySelectorAll(
      ".MuiTab-root"
    )[0] as HTMLButtonElement;

    if (_expanded) {
      selectedTabNode.focus();
    } else {
      selectedTabNode.blur();
    }
  }, [focusContainerId]);

  return { expanded };
}

function useFocusTabItem({ drawerRef, activeItem, expanded }) {
  useEffect(() => {
    const activeItemIndex = findActiveItemIndex(activeItem);
    const selectedTabNode = drawerRef.current?.querySelectorAll(".MuiTab-root")[
      activeItemIndex
    ] as HTMLButtonElement;

    if (expanded) {
      selectedTabNode.focus();
    } else {
      selectedTabNode.blur();
    }
  }, [expanded]);
}

export function Sidebar() {
  const drawerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const activeItem = useActiveTab();
  const { expanded } = useSidebarExpanded(drawerRef);
  useFocusTabItem({ drawerRef, activeItem, expanded });
  const dispatch = useAppDispatch();

  const handleChangeActiveItem = (item: SidebarItem) => {
    navigate(item.link);
    dispatch(toggleSidebarFocus(false));
  };

  return (
    <Drawer variant="permanent" open={expanded} elevation={0}>
      <FocusContainer
        focusContainerId="sidebarId"
        className="flex flex-col grow items-start pt-4 overflow-hidden"
      >
        <Box className="flex items-center">
          <StyledBadge
            color="success"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src={avatarImg}
              sx={{ bgcolor: "primary.main", marginLeft: "15px" }}
            />
          </StyledBadge>
          <Typography sx={{ paddingLeft: "15px" }} fontWeight="bold">
            Samuel Comeau
          </Typography>
        </Box>

        <Divider sx={{ margin: "16px 0" }} />

        <Tabs
          ref={drawerRef}
          value={activeItem}
          orientation="vertical"
          aria-label="tabs"
          classes={{
            root: "grow w-full",
            flexContainerVertical: "grow h-full",
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
      </FocusContainer>
    </Drawer>
  );
}
