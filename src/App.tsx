import {
	AppBar,
	Avatar,
	Breadcrumbs,
	Button,
	Drawer,
	Link,
	Toolbar,
} from '@mui/material';
import { blue, deepOrange } from '@mui/material/colors';
import { AppLayout } from './components/layout/AppLayout';
import { Spacer } from './components/layout/Spacer';
import { Clock } from './components/widgets/Clock';
import { Play } from './pages/Play';

const Sidebar = () => (
	<Drawer variant='persistent' anchor='left' sx={{ width: '78px' }} open>
		<div className='flex flex-col grow'>
			<Button size='large'>
				<Avatar
					variant='square'
					src='/retroid_t.png'
					sx={{ width: 56, height: 48 }}
				/>
			</Button>
			<Spacer direction='vertical' />
			allo
		</div>
	</Drawer>
);
const TopBar = () => (
	<AppBar position='relative' color='transparent' elevation={0}>
		<Toolbar>
			<Breadcrumbs aria-label='breadcrumb'>
				<Link underline='hover' color='inherit' href='/'>
					MUI
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

function App() {
	return (
		<AppLayout left={<Sidebar />} top={<TopBar />}>
			<Play />
		</AppLayout>
	);
}

export default App;
