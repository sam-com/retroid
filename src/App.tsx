import { AppBar, Avatar, Drawer, IconButton, Toolbar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { AppLayout } from './components/layout/AppLayout';
import { Spacer } from './components/layout/Spacer';
import { Play } from './pages/Play';

const Sidebar = () => (
	<Drawer variant='permanent' anchor='left' sx={{ width: 56 }}>
		<IconButton>
			<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
		</IconButton>
	</Drawer>
);
const TopBar = () => (
	<AppBar position='relative' color='transparent' elevation={0}>
		<Toolbar>
			<Spacer direction='horizontal' />
			TIME DISPLAY
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
