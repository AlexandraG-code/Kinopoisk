import react from '@vitejs/plugin-react'

import path, { resolve } from 'path'

import { UserConfigExport, defineConfig } from 'vite'
export default defineConfig({
	plugins: [
		react(),
	],
	server: {
		port: 3001
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				env_config: resolve(__dirname, 'env-config.ts')
			}
		}
	},
	test: {
		globals: true,
		environment: 'jsdom'
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, './src/app'),
			'@features': path.resolve(__dirname, './src/features'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@services': path.resolve(__dirname, './src/services')
		}
	}
} as UserConfigExport)
