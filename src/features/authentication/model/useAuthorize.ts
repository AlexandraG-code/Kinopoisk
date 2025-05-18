import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

//todo  перенести в  shared
import { RootState } from '@app/store/BoundingStore'

import { FirebaseService } from '@shared/service/firebase.service'

import { setIsAuthenticated, setUserCredentials } from './AuthSlice'

//admin@mail.ru
//admin2

export const useAuthorize = () => {
	const { userCredentials, isAuthenticated, loading } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		setAuthData()

	}, [userCredentials])

	const setAuthData = () => {
		if (!userCredentials) {
			return
		}
		dispatch(setUserCredentials(userCredentials))
		dispatch(setIsAuthenticated(true))
	}

	const resetAuthData = async () => {
		try {
			await FirebaseService.firebaseLogout()
			dispatch(setUserCredentials(null))
			dispatch(setIsAuthenticated(false))
		} catch (e) {
			console.log(e)
		}
	}

	return { isAuthenticated, loading, userCredentials, resetAuthData, setAuthData }
}
