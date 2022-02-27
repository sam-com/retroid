import { AppBar, Avatar, Breadcrumbs, Link, Toolbar } from '@mui/material';
import { Spacer } from '../layout/Spacer';
import { Clock } from '../widgets/Clock';

export function Topbar() {
	return (
		<AppBar position='relative' color='transparent' elevation={0}>
			<Toolbar>
				<Breadcrumbs aria-label='breadcrumb'>
					<Link underline='hover' color='inherit' href='/'>
						<Avatar
							variant='square'
							src='/retroid_t.png'
							sx={{ width: 56, height: 48 }}
						/>
					</Link>
					<Link underline='hover' color='inherit' href='/'>
						Snes
					</Link>
					<Link underline='hover' color='inherit' href='/'>
						Super Mario World
					</Link>
				</Breadcrumbs>
				<Spacer direction='horizontal' />
				<div className='gap-1 flex items-center'>
					<Clock />
				</div>
			</Toolbar>
		</AppBar>
	);
}
