import { useEffect, useRef } from "react";
import { Howl } from "howler";

export function useSound(soundPath: string, options?: any) {
  const soundRef = useRef<Howl>();

  useEffect(() => {
    soundRef.current = new Howl({
      src: [`/sounds/${soundPath}`],
      preload: true,
    });
  }, [soundPath, options]);

  const play = () => soundRef?.current?.play();

  return [play];
}
