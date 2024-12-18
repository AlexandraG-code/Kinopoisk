import axios from 'axios'

export const AxiosFetch = axios.create()

AxiosFetch.interceptors.request.use(async (config) => {
	config.headers['X-API-KEY'] = window._env_.API_KEY
	config.headers['Content-Type'] = 'application/json'
	return config
})
