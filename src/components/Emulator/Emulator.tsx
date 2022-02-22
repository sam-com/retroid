import { RefObject, useEffect, useRef } from 'react';
import {
	EmulatorMessage,
	EmulatorMessageType,
} from '../../api/emulator/EmulatorMessageHandler';
import { EMULATOR_CONTAINER_ID } from './constants';
import { EmulatorOverlay } from './EmulatorOverlay';

const getContentWindow = (iframeRef: RefObject<HTMLIFrameElement>) =>
	iframeRef.current?.contentWindow;

function waitEmulatorReadiness(
	iframeRef: RefObject<HTMLIFrameElement>,
	message: EmulatorMessage
) {
	window.onmessage = function ({ data }) {
		if (data.type === 'ready') {
			getContentWindow(iframeRef)?.postMessage(message, '*');
		}
	};
}

function useInitializeEmulator(props: {
	iframeRef: RefObject<HTMLIFrameElement>;
	rom: string;
	core: string;
}) {
	const message = {
		type: EmulatorMessageType.initialize,
		payload: { rom: props.rom, core: props.core },
	};

	useEffect(() => {
		waitEmulatorReadiness(props.iframeRef, message);
	}, [props.iframeRef]);
}

function useEmulatorControls(sendMessage: (message: EmulatorMessage) => void) {
	const startMessage = { type: EmulatorMessageType.start };
	const pauseMessage = { type: EmulatorMessageType.pause };
	const resumeMessage = { type: EmulatorMessageType.resume };
	const restartMessage = { type: EmulatorMessageType.restart };

	const onStart = () => sendMessage(startMessage);
	const onPause = () => sendMessage(pauseMessage);
	const onResume = () => sendMessage(resumeMessage);
	const onRestart = () => sendMessage(restartMessage);

	return { onStart, onPause, onResume, onRestart };
}

export function Emulator(props: { rom: string; core: string }) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const containerRef = useRef<HTMLElement>(null);

	const sendMessage = (message: EmulatorMessage) =>
		iframeRef.current?.contentWindow?.postMessage(message, '*');

	useInitializeEmulator({ iframeRef, ...props });
	const emulatorControls = useEmulatorControls(sendMessage);

	return (
		<figure
			ref={containerRef}
			id={EMULATOR_CONTAINER_ID}
			className='relative w-full h-full flex items-center justify-center select-none bg-black'
		>
			<iframe
				id='iframe-id'
				className='w-full h-full'
				ref={iframeRef}
				src='/emulator/index.html'
				title='Emulator'
			/>

			<EmulatorOverlay {...emulatorControls} />
		</figure>
	);
}
