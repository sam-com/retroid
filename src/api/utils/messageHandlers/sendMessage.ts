import { IncomingEmulatorMessage, OutgoingEmulatorMessage } from "./emulatorMessageHandler";

export function sendMessage(
	destinationWindow: Window,
	message: OutgoingEmulatorMessage | IncomingEmulatorMessage
) {
	destinationWindow.postMessage(message, '*');
}