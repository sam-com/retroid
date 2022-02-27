import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { cyan } from '@mui/material/colors';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#37B6FF',
		},
		info: {
			main: '#D9D9D8',
		},
		warning: {
			main: '#ffde5a',
		},
		success: {
			main: '#80cb2b',
		},
		error: {
			main: '#eb1d29',
		},
		text: {
			primary: '#D9D9D8',
		},
		background: {
			default: '#1e3c65',
			paper: '#1e1e1e',
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
