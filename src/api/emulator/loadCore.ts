export async function loadCore(core: string) {
	return new Promise<void>((resolve) => {
		const renderer = document.getElementById('canvas');
		const script: HTMLScriptElement = document.createElement('script');
		script.src = `/cores/${core}_libretro.js`;

		script.onerror = (e) => {
			alert(e);
		};

		script.onload = () => {
			console.log('core loaded');
			return resolve();
		};

		renderer?.appendChild(script);
	});
}
