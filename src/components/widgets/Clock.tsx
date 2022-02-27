import { AccessTime, SignalWifi4Bar } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export function Clock() {
	const [dateState, setDateState] = useState(new Date());

	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000);
	}, []);

	return (
		<Stack direction='row' spacing={2} className='flex items-center'>
			<Typography variant='h6' color='text.primary'>
				{dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
				})}
			</Typography>
			<Typography
				variant='h6'
				color='text.primary'
				className='flex items-center'
			>
				<SignalWifi4Bar />
			</Typography>
		</Stack>
	);
}
