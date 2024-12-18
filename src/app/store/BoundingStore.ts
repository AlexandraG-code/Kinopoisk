import {configureStore, nanoid, PayloadAction} from '@reduxjs/toolkit'
import { movieApiService, viewMoviesReducer } from '@features/viewMovies'
import { movieReducer } from '@features/moviePreview'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dictionaryService } from '@entities/DictionaryLoader'
import {useId} from "react";

// Создаем middleware для логирования
//В Redux Toolkit middleware используются для обработки действий (actions) перед тем, как они достигнут редьюсеров.
// Middleware позволяет добавлять дополнительную логику, такую как логирование, обработка асинхронных действий, или выполнение побочных эффектов.
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
	console.log('Действие:', action)
	console.log('Предыдущее состояние:', store.getState())
	const result = next(action) // Передаем действие дальше
	console.log('Новое состояние:', store.getState())
	return result
}

const middleware = (getDefaultMiddleware: any) =>
	getDefaultMiddleware().concat(movieApiService.middleware, dictionaryService.middleware,  loggerMiddleware) // Объединяем middleware

export const store = configureStore({
	reducer: {
		// Здесь вы можете использовать любое имя
		viewFilms: viewMoviesReducer,
		movie: movieReducer,

		// rtk query
		[movieApiService.reducerPath]: movieApiService.reducer,
		[dictionaryService.reducerPath]: dictionaryService.reducer
	},
	middleware,
	//process.env.NODE_ENV !== 'production'
	devTools: true
})
// rtk query
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
