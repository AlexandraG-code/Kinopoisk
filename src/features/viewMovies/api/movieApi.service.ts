import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { MovieDocsResponseDtoV14 } from '@shared/types/types'

export interface Filter {
	genre?: string | null
	country?: string | null
}

export interface GetDTO {
	page: number
	limit: number
	filter?: Filter | null
}

// без общей функции
export const movieApiService = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({
		baseUrl: `${window._env_.API_URL}/${window._env_.API_VERSION}`,
		prepareHeaders: (headers) => {
			// заголовки по умолчанию
			headers.set('X-API-KEY', window._env_.API_KEY)
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),
	tagTypes: ['Movies'],
	endpoints: (builder) => ({
		getAndFilterMovies: builder.query<MovieDocsResponseDtoV14, GetDTO>({
			query: ({ page, limit, filter }) => {
				const filterOptions = {
					['genres.name']: filter?.genre,
					['countries.name']: filter?.country
				}

				const params = Object.fromEntries(
					Object.entries(filterOptions ?? {}).filter(([_, value]) => value !== null && value !== undefined)
				) as Record<string, string>

				const queryString = new URLSearchParams({
					page: page.toString(),
					limit: limit.toString(),
					...params
				}).toString()

				return `movie?${queryString}` // Используем GET запроса
			}
		})
	})
})

export const { useGetAndFilterMoviesQuery } = movieApiService
