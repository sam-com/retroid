import {
  Fullscreen,
  FullscreenExit,
  PlayArrow,
  Pause,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { MutableRefObject, RefObject, useEffect, useState } from "react";
import { EMULATOR_CONTAINER_ID } from "./Emulator";

type EmulatorRef = RefObject<HTMLIFrameElement>;

type EmulatorOverlayProps = {
  iframeRef: EmulatorRef;
};

const Spacer = () => <span className=" ml-auto" />;

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    return document.exitFullscreen();
  }
  return document.getElementById(EMULATOR_CONTAINER_ID)?.requestFullscreen();
};

const startEmulator = (iframeRef: EmulatorRef) => {
  iframeRef.current?.contentWindow?.postMessage("start", "*");
};

const togglePause = (props: { iframeRef: EmulatorRef; running?: boolean }) => {
  const message = props.running ? "pause" : "resume";
  props.iframeRef.current?.contentWindow?.postMessage(message, "*");
};

const StartButton = ({ iframeRef }: { iframeRef: EmulatorRef }) => {
  const [running, setRunning] = useState<boolean | null>(null);

  const handleStart = () => {
    startEmulator(iframeRef);
    setRunning(true);
  };

  const handlePause = () => {
    togglePause({ iframeRef, running: running || false });
    setRunning(!running);
  };

  const Icon = running ? Pause : PlayArrow;
  const clickHandler = running !== null ? handlePause : handleStart;

  return (
    <IconButton
      onClick={clickHandler}
      size="small"
      color="primary"
      aria-label="Play"
      component="span"
    >
      <Icon fontSize="large" />
    </IconButton>
  );
};

const FullscreenButton = () => {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const fullscreenEvent = "fullscreenchange";
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
      size="small"
      color="primary"
      aria-label="fullscreen"
      component="span"
    >
      <Icon fontSize="large" />
    </IconButton>
  );
};

export function EmulatorOverlay({ iframeRef }: EmulatorOverlayProps) {
  return (
    <div className="absolute bottom-0 bg-black bg-opacity-60 w-full flex">
      {<StartButton iframeRef={iframeRef} />}
      <Spacer />
      <FullscreenButton />
    </div>
  );
}
