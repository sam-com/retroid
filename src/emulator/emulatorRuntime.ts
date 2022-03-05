import { sendMessage } from "@/api/utils/messageHandlers/sendMessage";
import { OutgoingEmulatorMessageType } from "../api/utils/messageHandlers/emulatorMessageHandler";
import { loadCore } from "./loadCore";
import { loadRom } from "./loadRom";
import { calculateAspectRatioFit } from "./resizeEmulator";

type ModuleArguments = any[];

type Module = {
  arguments: ModuleArguments;
  canvas: HTMLCanvasElement;
  noInitialRun: boolean;
  onRuntimeInitialized: () => void | Promise<void>;
  callMain: (args: ModuleArguments) => void;
  print: (text: string) => void;
  printErr: (text: string) => void;
  pauseMainLoop: () => void;
  resumeMainLoop: () => void;
  setCanvasSize: (width: number, height: number, bool: boolean) => void;
};

declare const window: any;

function setBaseModule(canvas: HTMLCanvasElement) {
  window.Module = {
    canvas: canvas,
    noInitialRun: true,
    onRuntimeInitialized: () => {},
    print: () => {},
    printErr: () => {},
    arguments: ["/rom.bin", "--verbose"],
  };

  return window.Module;
}

export class EmulatorRuntime {
  originalRatio: boolean;
  module: Module;
  parent: Window;
  canvas: HTMLCanvasElement;
  container: HTMLDivElement;
  started: boolean;
  ready: boolean;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.container = document.getElementById(
      "canvas-container"
    ) as HTMLDivElement;

    this.module = setBaseModule(this.canvas);
    this.parent = window.top;
    this.ready = false;
    this.started = false;
    this.originalRatio = true;

    sendMessage(this.parent, { type: OutgoingEmulatorMessageType.initialized });
    window.addEventListener("resize", this.resize.bind(this), false);
  }

  start() {
    this.module.callMain(window["Module"].arguments);

    requestAnimationFrame(() => {
      this.resize();
    });
  }

  restart() {
    window.location.href = window.location.href;
  }

  async initializeCoreAndRom({ core, rom }: { core: string; rom: string }) {
    await loadCore(core);
    await loadRom(rom);
    sendMessage(this.parent, { type: OutgoingEmulatorMessageType.ready });
  }

  async loadCore(core: string) {
    await loadCore(core);
  }

  async loadRom(rom: string) {
    await loadRom(rom);
  }

  pause() {
    this.module.pauseMainLoop();
  }

  resume() {
    this.module.resumeMainLoop();
  }

  changeAspectRatio() {
    this.originalRatio = !this.originalRatio;
    this.resize();
  }

  resize() {
    const [width, height] = calculateAspectRatioFit(
      this.container,
      this.originalRatio
    );

    this.module.setCanvasSize(width, height, false);
  }
}
