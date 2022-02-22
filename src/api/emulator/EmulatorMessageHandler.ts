import { EmulatorRuntime } from "./EmulatorRuntime";

export enum EmulatorMessageType {
  initialize = "initialize",
  start = "start",
  restart = "restart",
  pause = "pause",
  resume = "resume",
  ready = "ready",
}

export type EmulatorMessage = {
  type: EmulatorMessageType;
  payload?: any;
};

function dispathMessage(message: EmulatorMessage, emu: EmulatorRuntime) {
  console.log(message);
  switch (message.type) {
    case EmulatorMessageType.start:
      return emu.start();
    case EmulatorMessageType.restart:
      return emu.restart();
    case EmulatorMessageType.pause:
      return emu.pause();
    case EmulatorMessageType.resume:
      return emu.resume();
    case EmulatorMessageType.initialize:
      return emu.initializeCoreAndRom(message.payload);
    default:
      throw new Error(`Unsuported Emulator message: ${message} `);
  }
}

export function sendMessage(
  destinationWindow: Window,
  message: EmulatorMessage
) {
  destinationWindow.postMessage(message, "*");
}

export function registerMessagesHandler(emu: EmulatorRuntime) {
  window.onmessage = (e) => dispathMessage(e.data, emu);
}
