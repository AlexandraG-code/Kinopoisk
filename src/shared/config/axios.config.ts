import axios from 'axios'

export const AxiosFetch = axios.create({
	headers: {
		'X-API-KEY': window._env_.API_KEY,
		'Content-Type': 'application/json',
	}
})

AxiosFetch.interceptors.request.use(async (config) => {
	config.headers['X-API-KEY'] =  window._env_.API_KEY
	return config
})
