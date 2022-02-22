import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { cyan } from '@mui/material/colors';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					background: cyan[600],
				},
			},
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
