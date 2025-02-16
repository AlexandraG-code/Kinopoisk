import { AxiosFetch } from '@shared/config/axios.config'
import { MovieDocsResponseDtoV14 } from '@shared/types/types'

export interface GetDTO {
	page: number
	limit: number
}

export const MovieService = {
	serviceUrl: `${window._env_.API_URL}/${window._env_.API_VERSION}`,

	async getFilms(params: GetDTO) {
		return (
			await AxiosFetch.get<MovieDocsResponseDtoV14>(`${this.serviceUrl}/movie`, {
				params: params
			})
		)?.data
	}
}
