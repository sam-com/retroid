import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/retroid/',
	plugins: [
		react(),
		VitePWA({
			mode: 'production',
			registerType: 'autoUpdate',
			workbox: {
				sourcemap: true,
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				emulator: resolve(__dirname, 'emulator.html'),
			},
		},
	},
});
