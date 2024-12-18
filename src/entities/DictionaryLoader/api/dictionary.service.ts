import { DictionaryTypes, ResponseDictionary } from './api.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dictionaryService = createApi({
	reducerPath: 'dictionary',
	baseQuery: fetchBaseQuery({
		baseUrl: `${window._env_.API_URL}/v1`,
		prepareHeaders: (headers) => {
			// заголовки по умолчанию
			headers.set('X-API-KEY', window._env_.API_KEY)
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),

	tagTypes: ['Dictionary'],
	endpoints: (builder) => ({
		getDictionary: builder.query<ResponseDictionary[], DictionaryTypes>({
			query: (type) => {
				const queryString = new URLSearchParams({
					field: type
				}).toString()

				return `movie/possible-values-by-field?${queryString}` // Используем GET запрос
			}
		})
	})
})

export const { useGetDictionaryQuery } = dictionaryService
