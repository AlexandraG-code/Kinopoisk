import { useEffect } from 'react'

import { useSelector } from 'react-redux'

//todo  перенести в  shared
import { RootState } from '@app/store/BoundingStore'

import { FirebaseService } from '@shared/service/firebase.service'

import { AuthData } from './enums'

export const useAuthorize = () => {
	const { userCredentials } = useSelector((state: RootState) => state.auth)

	useEffect(() => {
		setAuthData()
	}, [userCredentials])

	const setAuthData = () => {
		const isAuth = localStorage.getItem(AuthData.isAuth)

		if (isAuth || !userCredentials) {
			return
		}

		localStorage.setItem(AuthData.isAuth, 'true')
		localStorage.setItem(AuthData.accessToken, userCredentials.stsTokenManager.accessToken)
		localStorage.setItem(AuthData.refreshToken, userCredentials.stsTokenManager.refreshToken)
		localStorage.setItem(AuthData.expirationTime, userCredentials.stsTokenManager.expirationTime)
	}

	const resetAuthData = async () => {
		try {
			await FirebaseService.firebaseLogout()
			localStorage.removeItem(AuthData.isAuth)
			localStorage.removeItem(AuthData.accessToken)
			localStorage.removeItem(AuthData.refreshToken)
			localStorage.removeItem(AuthData.expirationTime)
		} catch (e) {
			console.log(e)
		}
	}

	const checkIsAuth = () => {
		return localStorage.getItem(AuthData.isAuth)
	}

	return { checkIsAuth, resetAuthData, setAuthData }
}
