import { registerMessagesHandler } from './EmulatorMessageHandler';
import { EmulatorRuntime } from './EmulatorRuntime';

const emu = new EmulatorRuntime();

registerMessagesHandler(emu);

window.parent.addEventListener('keydown', (e) => {
	const k = new KeyboardEvent('keydown', e);
	document.dispatchEvent(k);
});

window.parent.addEventListener('keyup', (e) => {
	const k = new KeyboardEvent('keyup', e);
	document.dispatchEvent(k);
});
