import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

import { MovieService } from '../api/movie.service'
import { MovieDtoV14 } from '../../../shared/types/types'

const defaultContextValue = {
	movie: {} as MovieDtoV14,
	loadMovieData: async (id: number) => {
		// Реализация по умолчанию (можно оставить пустой)
	},
	loading: false
}

const MovieContext = createContext<{
	movie: MovieDtoV14
	loadMovieData: (id: number) => Promise<void>
	loading: boolean
}>(defaultContextValue)

export function MovieProvider({ children }: PropsWithChildren) {

	const [movie, setMovie] = useState<MovieDtoV14 | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const loadMovieData = async (id: number) => {
		setLoading(true)
		let response = await MovieService.getMovie(id)

		setMovie(response)

		setLoading(false)

	}

	const value = {
		movie,
		loadMovieData,
		loading
	}

	return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

export const useMovieContext = () => useContext(MovieContext)
