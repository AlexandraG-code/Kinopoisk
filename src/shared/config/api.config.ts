import { BaseQueryFn, CreateApiOptions, EndpointDefinitions } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ApiCreator extends Omit<CreateApiOptions<BaseQueryFn, EndpointDefinitions, string, string>, 'baseQuery'> {
	requestHeaders?: {
		header: string
		value: string
	}[]
	baseQueryFn: BaseQueryFn
}

export const apiCreator = ({ requestHeaders = [], baseQueryFn, ...props }: ApiCreator) => {
	return createApi({
		baseQuery: fetchBaseQuery({
			...baseQueryFn,
			prepareHeaders: (headers) => {
				// заголовки по умолчанию
				headers.set('X-API-KEY', window._env_.API_KEY)
				headers.set('Content-Type', 'application/json')

				requestHeaders.values()?.map(({ header, value }) => headers.set(header, value))

				return headers
			}
		}),
		...props
	})
}
