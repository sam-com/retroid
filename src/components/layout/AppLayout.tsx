import { Box, Paper } from '@mui/material';
import { ReactNode } from 'react';

type AppLayoutProps = {
	left: ReactNode;
	top: ReactNode;
	children: ReactNode;
};

const AppLayoutContainer = (props: { children: ReactNode }) => (
	<Box
		className='flex w-screen h-screen overflow-hidden'
		sx={{ backgroundColor: 'background.default' }}
	>
		{props.children}
	</Box>
);

const CenterContainer = (props: { children: ReactNode }) => (
	<div className='flex grow overflow-hidden'>{props.children}</div>
);
const RightContainer = (props: { top: ReactNode; center: ReactNode }) => (
	<div className='flex grow flex-col'>
		{props.top}
		<CenterContainer>{props.center}</CenterContainer>
	</div>
);

export function AppLayout(props: AppLayoutProps) {
	return (
		<AppLayoutContainer>
			{props.left}
			<RightContainer top={props.top} center={props.children} />
		</AppLayoutContainer>
	);
}
