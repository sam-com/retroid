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
