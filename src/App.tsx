import { Bottombar } from './components/bottombar/Bottombar';
import { AppLayout } from './components/layout/AppLayout';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';
import { Play } from './pages/Play';

function App() {
	return (
		<AppLayout left={<Sidebar />} top={<Topbar />} bottom={<Bottombar />}>
			<Play />
		</AppLayout>
	);
}

export default App;
