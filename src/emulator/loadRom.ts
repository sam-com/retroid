import { getFile } from './fileSystem/getFile';
import { FsPath } from './fileSystem/constants';

declare const FS: any;

export async function loadRom(rom: string): Promise<void> {
	const pathToRom = `./roms/${rom}`;
	let blob = (await getFile(pathToRom, 'blob')) as Blob | null;

	if (!blob) {
		throw new Error(`loadRom ->  Unable to fetch rom at ${rom}`);
	}

	const arrayBuffer = await blob.arrayBuffer();
	const romData = new Uint8Array(arrayBuffer);
	FS.createPath('/', FsPath.USERDATA, true, true);
	FS.writeFile(FsPath.ROM, romData);
	console.log('rom loaded');
}
