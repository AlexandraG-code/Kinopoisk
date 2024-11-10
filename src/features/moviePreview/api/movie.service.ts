import { AxiosFetch } from '@shared/config/axios.config'
import { MovieDtoV14 } from '@shared/types/types'

export const MovieService = {
	serviceUrl: `${window._env_.API_URL}/${window._env_.API_VERSION}`,

	async getMovie(id: number) {
		return (await AxiosFetch.get<MovieDtoV14>(`${this.serviceUrl}/movie/${id}`))?.data
	}
}
