import { useState } from 'react';
import { Emulator } from '../components/emulator/Emulator';

export function Play() {
	return (
		<div className='flex m-6 flex-grow'>
			<Emulator rom='smw.sfc' core='snes9x' />
		</div>
	);
}
