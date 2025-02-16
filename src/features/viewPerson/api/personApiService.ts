import { EndpointBuilder, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Person } from '@shared/types/types'
import {apiCreator} from "@shared/config/api.config";


export const personApiService = createApi({
	reducerPath: 'person',
	baseQuery: fetchBaseQuery({
		baseUrl: `${window._env_.API_URL}/${window._env_.API_VERSION}`,
		prepareHeaders: (headers) => {
			// заголовки по умолчанию
			headers.set('X-API-KEY', window._env_.API_KEY)
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),
	tagTypes: ['persons'],
	endpoints: (builder) => ({
		getPersonById: builder.query<Person, number>({
			query: (personId) => {
				return `person/${personId}`
			}
		})
	})
})

// export const personApiService = apiCreator({
// 	baseUrl: `${window._env_.API_URL}/${window._env_.API_VERSION}`,
// 	tagTypes: ['persons'],
// 	endpoints: (builder) => ({
// 		getPersonById: builder.query<Person, number>({
// 			query: (personId) => `person/${personId}`,
// 		}),
// 	}),
// });

export const { useGetPersonByIdQuery } = personApiService
