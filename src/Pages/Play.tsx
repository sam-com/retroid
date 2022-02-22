import { useState } from 'react';
import { Emulator } from '../components/emulator/Emulator';

export function Play() {
	return (
		<div className='flex w-[1000px] h-[600px]'>
			<Emulator rom='smw.sfc' core='snes9x' />
		</div>
	);
}
