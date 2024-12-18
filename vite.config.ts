import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { UserConfigExport, defineConfig } from 'vite'

export default defineConfig({
	server:{
		port: 3001
	},
	plugins: [react()],
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
			'@assets': path.resolve(__dirname, './src/assets'),
			'@features': path.resolve(__dirname, './src/features'),
			'@app': path.resolve(__dirname, './src/app'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@shared': path.resolve(__dirname, './src/shared')
		}
	}
} as UserConfigExport)
