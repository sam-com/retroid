import { AccessTime } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export function Clock() {
	const [dateState, setDateState] = useState(new Date());

	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000);
	}, []);

	return (
		<Typography
			variant='h6'
			color='text.primary'
			className=' gap-1 flex items-center'
		>
			<AccessTime fontSize='medium' />
			{dateState.toLocaleString('en-US', {
				hour: 'numeric',
				minute: 'numeric',
			})}
		</Typography>
	);
}
