import { ReactNode } from 'react';

type AppLayoutProps = {
	left: ReactNode;
	top: ReactNode;
	children: ReactNode;
};

const AppLayoutContainer = (props: { children: ReactNode }) => (
	<div className='flex w-screen h-screen bg-gray-800 overflow-hidden'>
		{props.children}
	</div>
);

const CenterContainer = (props: { children: ReactNode }) => (
	<div className='flex grow bg-gray-800 overflow-hidden'>{props.children}</div>
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
