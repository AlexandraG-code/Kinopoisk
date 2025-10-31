import { User, UserCredential } from '@firebase/auth'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import firebase from 'firebase/compat'

import { FirebaseService, GetUserDTO } from '@shared/service/firebase.service'

export interface State {
	loading: boolean
	isAuthenticated: boolean
	error: string | null | undefined
	userCredentials: UserCredential | null
	currentUser: User | null
}

const initial: State = {
	isAuthenticated: false,
	loading: false,
	error: null,
	userCredentials: null,
	currentUser: null
}

// Асинхронное действие для запроса к API
export const login = createAsyncThunk('auth/login', async (params: GetUserDTO) => {
	const credentials = await FirebaseService.firebaseLogin(params)
	// сериализуем данные , т.к Firebase возвращает их в не том формате
	return JSON.stringify(credentials.user)
})

const authSlice = createSlice({
	//ключ auth для текущего слайса
	// Это имя используется для генерации действий
	name: 'auth',
	initialState: initial,
	reducers: {
		setIsAuthenticated(state, action: PayloadAction<boolean>) {
			state.isAuthenticated = action.payload
		},
		setUserCredentials(state, action: PayloadAction<UserCredential | null>) {
			state.userCredentials = action.payload
		},
		setCurrentUser(state, action: PayloadAction<User>) {
			state.currentUser = action.payload
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload
		}
	},

	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true
				state.isAuthenticated = false
				state.error = null
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.userCredentials = JSON.parse(action.payload)
				state.isAuthenticated = true // Записываем данные в стейт
			})
			.addCase(login.rejected, (state, action) => {
				state.isAuthenticated = false
				state.loading = false
				state.error = action.error.message // Обрабатываем ошибку
			})
	}
})

export const { setIsAuthenticated, setLoading, setCurrentUser,  setUserCredentials } = authSlice.actions

export const authReducer = authSlice.reducer
