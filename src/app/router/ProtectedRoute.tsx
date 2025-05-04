import { PropsWithChildren, useEffect } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthorize } from '@features/authentication/model/useAuthorize'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/BoundingStore'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
	const { setAuthData, checkIsAuth } = useAuthorize()

	const { userCredentials } = useSelector((state: RootState) => state.auth)

	useEffect(() => {

		setAuthData()
	}, [userCredentials])


	// Если пользователь не аутентифицирован, перенаправляем на страницу логина
	return checkIsAuth() ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />
}
