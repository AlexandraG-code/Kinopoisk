export declare global {
	interface Window {
		_env_: {
			API_KEY: string,
			API_URL: string
			API_VERSION:string
		}
	}
}



declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}