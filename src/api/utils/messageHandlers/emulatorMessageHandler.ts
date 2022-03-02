import { EmulatorRuntime } from "@/emulator/emulatorRuntime";
import { sendMessage } from "./sendMessage";

export enum IncomingEmulatorMessageType {
  initialize = "initialize",
  start = "start",
  restart = "restart",
  pause = "pause",
  resume = "resume",
  ready = "ready",
  changeAspect = "changeAspect",
}

export enum OutgoingEmulatorMessageType {
  ready = "ready",
  initialized = "initialized",
}

export type IncomingEmulatorMessage = {
  type: IncomingEmulatorMessageType;
  payload?: any;
};

export type OutgoingEmulatorMessage = {
  type: OutgoingEmulatorMessageType;
  payload?: any;
};

function dispatchMessage(
  message: OutgoingEmulatorMessage,
  destination: Window
) {
  switch (message.type) {
    case OutgoingEmulatorMessageType.ready:
      return sendMessage(destination, message);
  }
}

function receiveMessage(
  message: IncomingEmulatorMessage,
  emu: EmulatorRuntime
) {
  switch (message.type) {
    case IncomingEmulatorMessageType.start:
      return emu.start();
    case IncomingEmulatorMessageType.restart:
      return emu.restart();
    case IncomingEmulatorMessageType.pause:
      return emu.pause();
    case IncomingEmulatorMessageType.resume:
      return emu.resume();
    case IncomingEmulatorMessageType.initialize:
      return emu.initializeCoreAndRom(message.payload);
    case IncomingEmulatorMessageType.changeAspect:
      return emu.changeAspectRatio();
    default:
      throw new Error(`Unsuported Emulator message: ${message} `);
  }
}

export function registerMessagesHandler(emu: EmulatorRuntime) {
  window.onmessage = (e) => receiveMessage(e.data, emu);
}
