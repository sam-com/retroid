import { useEffect, useRef } from "react";

import { EmulatorOverlay } from "./EmulatorOverlay";

export const EMULATOR_CONTAINER_ID = "emulator-container";

function waitEmulatorReadiness(callback: () => void) {
  window.onmessage = function ({ data }) {
    if (data === "ready") {
      callback();
    }
  };
}

export function Emulator(props: { rom: string; core: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    waitEmulatorReadiness(() => {});
  }, []);

  return (
    <figure
      id={EMULATOR_CONTAINER_ID}
      className="relative h-max w-max flex items-center justify-center bg-black select-none"
    >
      <iframe
        id="emulatorIframe"
        ref={iframeRef}
        src="/src/components/Emulator/Emulator.htm"
        width={1000}
        height={600}
        title="Emulator"
      ></iframe>

      <EmulatorOverlay iframeRef={iframeRef} />
    </figure>
  );
}
