import { configureStore } from '@reduxjs/toolkit'
import { viewMoviesReducer } from '@features/viewMovies'
import { movieReducer } from '@features/moviePreview'

export const store = configureStore({
	reducer: {
		// Здесь вы можете использовать любое имя
		viewFilms: viewMoviesReducer,
		movie: movieReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
