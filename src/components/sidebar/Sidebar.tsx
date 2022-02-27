import { Box, Divider, Drawer, Icon, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { Spacer } from '../layout/Spacer';
import {
	accountSidebarItem,
	mainSidebarItems,
	secondarySidebarItems,
} from './sidebarItems';
import { SidebarItem } from './types';

type SidebarMenuItemProps = {
	item: SidebarItem;
	onClick: (itemKey: SidebarItem['key']) => void;
	active: boolean;
};

function SidebarMenuItem({ active, item, onClick }: SidebarMenuItemProps) {
	const Icon = active ? item.activeIcon : item.icon;
	return (
		<IconButton
			color={active ? item.color : 'info'}
			sx={{ width: '64px', height: '64px' }}
			onClick={() => onClick(item.key)}
		>
			<Icon fontSize='large' />
		</IconButton>
	);
}

export function Sidebar() {
	const [activeItem, setActiveItem] = useState<string>('games');

	const handleChangeActiveItem = (itemKey: string) => setActiveItem(itemKey);

	return (
		<Drawer variant='persistent' anchor='left' sx={{ width: '78px' }} open>
			<Box className='flex flex-col grow items-center p-2'>
				<Stack>
					<SidebarMenuItem
						key={accountSidebarItem.key}
						item={accountSidebarItem}
						onClick={handleChangeActiveItem}
						active={activeItem === accountSidebarItem.key}
					/>
					<Divider sx={{ margin: '16px 0' }} />
					<Stack spacing={1}>
						{mainSidebarItems.map((mainItem) => (
							<SidebarMenuItem
								key={mainItem.key}
								item={mainItem}
								active={activeItem === mainItem.key}
								onClick={handleChangeActiveItem}
							/>
						))}
					</Stack>
				</Stack>
				<Spacer direction='vertical' />
				<Stack spacing={1} direction='column'>
					{secondarySidebarItems.map((mainItem) => (
						<SidebarMenuItem
							key={mainItem.key}
							item={mainItem}
							active={activeItem === mainItem.key}
							onClick={handleChangeActiveItem}
						/>
					))}
				</Stack>
			</Box>
		</Drawer>
	);
}
