import { Middleware, PayloadAction, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { movieReducer } from '@features/moviePreview'
import { movieApiService, viewMoviesReducer } from '@features/viewMovies'
import { personApiService } from '@features/viewPerson/api/personApiService'

import { dictionaryService } from '@entities/DictionaryLoader'

// Типизация RootState и AppDispatch
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Создаем middleware для логирования
// @ts-ignore
const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: PayloadAction) => {
	// console.log('Действие:', action)
	// console.log('Предыдущее состояние:', store.getState())
	const result = next(action) // Передаем действие дальше
	// console.log('Новое состояние:', store.getState())
	return result
}
// @ts-ignore
const middleware = (getDefaultMiddleware) =>
	getDefaultMiddleware().concat(
		movieApiService.middleware,
		dictionaryService.middleware,
		personApiService.middleware,
		loggerMiddleware // Добавляем ваш middleware
	)

// Создаем store
// @ts-ignore
export const store = configureStore({
	reducer: {
		viewFilms: viewMoviesReducer,
		movie: movieReducer,
		[movieApiService.reducerPath]: movieApiService.reducer,
		[dictionaryService.reducerPath]: dictionaryService.reducer,
		[personApiService.reducerPath]: personApiService.reducer
	},
	middleware,
	devTools: process.env.NODE_ENV !== 'production' // Включаем devTools только в режиме разработки
})

// Настраиваем слушатели
setupListeners(store.dispatch)
