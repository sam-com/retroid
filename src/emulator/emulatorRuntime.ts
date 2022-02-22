import { EmulatorMessageType, sendMessage } from './EmulatorMessageHandler';
import { loadCore } from './loadCore';
import { loadRom } from './loadRom';
import { calculateAspectRatioFit } from './resizeEmulator';

type ModuleArguments = any[];

type Module = {
	arguments: ModuleArguments;
	canvas: HTMLCanvasElement;
	noInitialRun: boolean;
	onRuntimeInitialized: () => void | Promise<void>;
	callMain: (args: ModuleArguments) => void;
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
		arguments: ['/rom.bin', '--verbose'],
	};

	return window.Module;
}

export class EmulatorRuntime {
	module: Module;
	canvas: HTMLCanvasElement;
	container: HTMLDivElement;
	constructor() {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
		this.container = document.getElementById('emulator-body') as HTMLDivElement;
		this.module = setBaseModule(this.canvas);

		window.addEventListener('resize', this.resize.bind(this), false);
		// window.addEventListener("blur", this.focus.bind(this), false);

		sendMessage(window.top, { type: EmulatorMessageType.ready });
	}

	start() {
		this.module.callMain(window['Module'].arguments);

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

	resize() {
		const { offsetWidth, offsetHeight } = this.container;
		const { innerWidth, innerHeight } = window;
		const [width, height] = calculateAspectRatioFit(
			offsetWidth,
			offsetHeight,
			innerWidth,
			innerHeight
		);

		this.module.setCanvasSize(width, height, true);
	}

	focus() {
		console.log('blur');

		requestAnimationFrame(() => {
			window.blur();
			window.focus();
		});
	}
}
