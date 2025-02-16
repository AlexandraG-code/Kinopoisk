import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { MovieDtoV14 } from '@shared/types/types'

import { MovieService } from '../api/movie.service'

export interface State {
	movieInfo: MovieDtoV14 | null
	loading: boolean
	errorMessage: string | null | undefined
}

const initial: State = {
	loading: false,
	movieInfo: null,
	errorMessage: null
}

export const loadMovieById = createAsyncThunk('movie/getMovie', async (id: number) => {
	return await MovieService.getMovie(id)
})

const movieSlice = createSlice({
	name: 'movie',
	initialState: initial,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadMovieById.pending, (state) => {
				state.loading = true
				state.errorMessage = null
			})
			.addCase(loadMovieById.fulfilled, (state, action) => {
				state.loading = false
				state.movieInfo = action.payload
			})
			.addCase(loadMovieById.rejected, (state, action) => {
				state.loading = false
				state.errorMessage = action.error.message
			})
	}
})

export const movieReducer = movieSlice.reducer
