import { RefObject, useEffect, useRef } from "react";
import {
  IncomingEmulatorMessage,
  IncomingEmulatorMessageType,
} from "../../api/utils/messageHandlers/emulatorMessageHandler";

import { EMULATOR_CONTAINER_ID } from "./constants";
import { EmulatorOverlay } from "./EmulatorOverlay";

const getContentWindow = (iframeRef: RefObject<HTMLIFrameElement>) =>
  iframeRef.current?.contentWindow;

function waitEmulatorReadiness(
  iframeRef: RefObject<HTMLIFrameElement>,
  message: any
) {
  window.onmessage = function ({ data }) {
    if (data.type === "initialized") {
      getContentWindow(iframeRef)?.postMessage(message, "*");
    }
  };
}

function useInitializeEmulator(props: {
  iframeRef: RefObject<HTMLIFrameElement>;
  rom: string;
  core: string;
}) {
  const message = {
    type: IncomingEmulatorMessageType.initialize,
    payload: { rom: props.rom, core: props.core },
  };

  useEffect(() => {
    waitEmulatorReadiness(props.iframeRef, message);
  }, [props.iframeRef]);
}

function useEmulatorControls(
  sendMessage: (message: IncomingEmulatorMessage) => void
) {
  const startMessage = { type: IncomingEmulatorMessageType.start };
  const pauseMessage = { type: IncomingEmulatorMessageType.pause };
  const resumeMessage = { type: IncomingEmulatorMessageType.resume };
  const restartMessage = { type: IncomingEmulatorMessageType.restart };
  const changeAspectMessage = {
    type: IncomingEmulatorMessageType.changeAspect,
  };

  const onStart = () => sendMessage(startMessage);
  const onPause = () => sendMessage(pauseMessage);
  const onResume = () => sendMessage(resumeMessage);
  const onRestart = () => sendMessage(restartMessage);
  const onChangeAspect = () => sendMessage(changeAspectMessage);

  return { onStart, onPause, onResume, onRestart, onChangeAspect };
}

export function Emulator(props: { rom: string; core: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const sendMessage = (message: IncomingEmulatorMessage) =>
    iframeRef.current?.contentWindow?.postMessage(message, "*");

  useInitializeEmulator({ iframeRef, ...props });
  const emulatorControls = useEmulatorControls(sendMessage);

  return (
    <figure
      ref={containerRef}
      id={EMULATOR_CONTAINER_ID}
      className="relative w-full h-full flex items-center justify-center select-none bg-black"
    >
      <iframe
        referrerPolicy="same-origin"
        id="iframe-id"
        className="w-full h-full"
        ref={iframeRef}
        src={`${import.meta.env.BASE_URL}/emulator.html`}
        title="Emulator"
      />

      <EmulatorOverlay {...emulatorControls} />
    </figure>
  );
}
