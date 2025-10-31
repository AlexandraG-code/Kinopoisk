import { Middleware, PayloadAction,  combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authReducer } from '@features/authentication'
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
	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	}).concat(
		movieApiService.middleware,
		dictionaryService.middleware,
		personApiService.middleware,

		loggerMiddleware // Добавляем ваш middleware,
	)

//корневой reducer
const rootReducer = combineReducers({
	viewFilms: viewMoviesReducer,
	movie: movieReducer,
	auth: authReducer,
	[movieApiService.reducerPath]: movieApiService.reducer,
	[dictionaryService.reducerPath]: dictionaryService.reducer,
	[personApiService.reducerPath]: personApiService.reducer
})

// Настройка конфигурации для Redux Persist
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'] // Указываем редюсеры, которые хотим сохранить
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Создаем store
// @ts-ignore
export const store = configureStore({
	reducer: persistedReducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production' // Включаем devTools только в режиме разработки
})

// Создаем persistor
export const persistor = persistStore(store)

// Настраиваем слушатели
setupListeners(store.dispatch)
