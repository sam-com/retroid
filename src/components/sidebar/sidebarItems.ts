import {
	GamepadOutlined,
	Star,
	Gamepad,
	History,
	StarBorder,
	SettingsOutlined,
	Settings,
	PowerSettingsNew,
	PowerSettingsNewTwoTone,
	AccountCircleOutlined,
	AccountCircle,
	SportsEsports,
	SportsEsportsOutlined,
	Apps,
	Computer,
	Bookmark,
	BookmarkOutlined,
	BookmarkBorder,
	CategoryOutlined,
	Category,
	WatchLaterOutlined,
	WatchLater,
	SettingsPower,
} from '@mui/icons-material';
import { SidebarItem } from './types';

export const accountSidebarItem: SidebarItem = {
	key: 'account',
	icon: AccountCircleOutlined,
	activeIcon: AccountCircle,
	color: 'info',
};

export const mainSidebarItems: SidebarItem[] = [
	{
		key: 'games',
		icon: SportsEsportsOutlined,
		activeIcon: SportsEsports,
		color: 'success',
	},
	{
		key: 'consoles',
		icon: CategoryOutlined,
		activeIcon: Category,
		color: 'error',
	},
	{
		key: 'recent',
		icon: WatchLaterOutlined,
		activeIcon: WatchLater,
		color: 'primary',
	},
	{
		key: 'favorites',
		icon: BookmarkBorder,
		activeIcon: Bookmark,
		color: 'warning',
	},
];

export const secondarySidebarItems: SidebarItem[] = [
	{
		key: 'power',
		icon: PowerSettingsNew,
		activeIcon: SettingsPower,
		color: 'info',
	},
	{
		key: 'settings',
		icon: SettingsOutlined,
		activeIcon: Settings,
		color: 'info',
	},
];
