import { BaseQueryFn, CreateApiOptions, EndpointDefinitions } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ApiCreator extends Omit<CreateApiOptions<BaseQueryFn, EndpointDefinitions, string, string>, 'baseQuery'> {
	requestHeaders?: {
		header: string
		value: string
	}[]
	baseUrl: string
}

export const apiCreator = ({ requestHeaders = [], baseUrl, ...props }: ApiCreator) => {
	return createApi({
		baseQuery: fetchBaseQuery({
			baseUrl,
			prepareHeaders: (headers) => {
				// заголовки по умолчанию
				headers.set('X-API-KEY', window._env_.API_KEY)
				headers.set('Content-Type', 'application/json')

				requestHeaders.forEach(({ header, value }) => headers.set(header, value))

				return headers
			}
		}),

		...props
	})
}
