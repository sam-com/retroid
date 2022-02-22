import {
	Fullscreen,
	FullscreenExit,
	PlayArrow,
	Pause,
	Replay,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ReactNode, RefObject, useEffect, useState } from 'react';

import { EMULATOR_CONTAINER_ID } from './constants';

type EmulatorRef = RefObject<HTMLIFrameElement>;

type EmulatorOverlayProps = {
	onStart: () => void;
	onPause: () => void;
	onResume: () => void;
	onRestart: () => void;
};

const Spacer = (props: { direction: 'vertical' | 'horizontal' }) => (
	<span className={props.direction === 'vertical' ? ' mt-auto' : 'ml-auto'} />
);

const toggleFullScreen = () => {
	if (document.fullscreenElement) {
		return document.exitFullscreen();
	}
	return document.getElementById(EMULATOR_CONTAINER_ID)?.requestFullscreen();
};

const StartButton = ({ onStart, onPause, onResume }: EmulatorOverlayProps) => {
	const [running, setRunning] = useState<boolean | null>(null);

	const handleStart = () => {
		onStart();
		setRunning(true);
	};

	const handlePause = () => {
		running ? onPause() : onResume();
		setRunning(!running);
	};

	const Icon = running ? Pause : PlayArrow;
	const clickHandler = running !== null ? handlePause : handleStart;

	return (
		<IconButton
			onClick={clickHandler}
			size='small'
			color='primary'
			aria-label='Play'
			component='span'
		>
			<Icon fontSize='large' />
		</IconButton>
	);
};

const RestartButton = ({ onRestart }: EmulatorOverlayProps) => {
	return (
		<IconButton
			size='small'
			color='primary'
			aria-label='fullscreen'
			component='span'
			onClick={onRestart}
		>
			<Replay fontSize='large' />
		</IconButton>
	);
};

const FullscreenButton = () => {
	const [fullscreen, setFullscreen] = useState(false);

	useEffect(() => {
		const fullscreenEvent = 'fullscreenchange';
		const fullscreenListener = () =>
			setFullscreen(!!document.fullscreenElement);

		document.addEventListener(fullscreenEvent, fullscreenListener);

		return () =>
			document.removeEventListener(fullscreenEvent, fullscreenListener);
	}, []);

	const Icon = fullscreen ? FullscreenExit : Fullscreen;

	return (
		<IconButton
			onClick={toggleFullScreen}
			size='small'
			color='primary'
			aria-label='fullscreen'
			component='span'
		>
			<Icon fontSize='large' />
		</IconButton>
	);
};

const OverlayContainer = (props: { children: ReactNode }) => (
	<div className='absolute inset-0 flex flex-col rounded'>{props.children}</div>
);

const BottomBar = (props: EmulatorOverlayProps) => (
	<div className='bg-black bg-opacity-60 w-full flex'>
		<StartButton {...props} />
		<RestartButton {...props} />
		<Spacer direction='horizontal' />
		<FullscreenButton />
	</div>
);

export function EmulatorOverlay(props: EmulatorOverlayProps) {
	return (
		<OverlayContainer>
			<Spacer direction='vertical' />
			<BottomBar {...props} />
		</OverlayContainer>
	);
}
