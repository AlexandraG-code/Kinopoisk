import { PropsWithChildren } from 'react'

import { Navigate, useLocation } from 'react-router-dom'

import { useAuthorize } from '@features/authentication'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
	const { isAuthenticated } = useAuthorize()
	const location = useLocation()

	return isAuthenticated ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />
}
