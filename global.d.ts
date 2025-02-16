declare global {
	interface Window {
		_env_: {
			API_KEY: string;
			API_URL: string;
			API_VERSION: string;
		};
	}
}

export {};