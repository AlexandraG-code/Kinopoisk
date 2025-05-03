import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { RootState } from '@app/store/BoundingStore'

export const AuthRouter = () => {
	const { isAuthenticated , userCredentials} = useSelector((state: RootState) => state.auth)

	useEffect(() => {
		console.log(isAuthenticated, 'isAuthenticated')
	}, [isAuthenticated])

	// Если пользователь не аутентифицирован, перенаправляем на страницу логина
	return isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate to={`/login?redirect=${location.pathname + location.search}`} replace />
	)
}
