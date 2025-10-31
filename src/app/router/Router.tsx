import React, { useEffect, useMemo, useState } from 'react'

import { useSelector } from 'react-redux'
import {
	Navigate,
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
	createRoutesFromElements,
	useNavigate
} from 'react-router-dom'

import { ProtectedRoute } from '@app/router/ProtectedRoute'

import { AboutPage } from '@pages/About'
import { AuthPage } from '@pages/AuthPage'
import { MainLayout } from '@pages/Layout/ui/MainLayout'
import { MainPage } from '@pages/Main'
import { MoviePage } from '@pages/MoviePage'
import { MoviesPage } from '@pages/MoviesPage'
import { NotFoundPage } from '@pages/NotFound'
import { PersonPage } from '@pages/PersonPage/ui/PersonPage'

import { routerConfig } from '@shared/config/router.config'
import { EditUserPage } from '@pages/EditUser'

export const Router = () => {
	const router = useMemo(() => {
		return createBrowserRouter(
			createRoutesFromElements(
				<>
					<Route path={routerConfig.notFound} element={<NotFoundPage />} />

					<Route index element={<Navigate to={routerConfig.login} />} />
					<Route path={routerConfig.login} element={<AuthPage />} />

					<Route path="/*" element={<MainLayout />}>
						<Route
							index
							path={`${routerConfig.main}*`}
							element={
								<ProtectedRoute>
									<MainPage />
								</ProtectedRoute>
							}
						/>
						<Route
							path={routerConfig.about}
							element={
								<ProtectedRoute>
									<AboutPage />
								</ProtectedRoute>
							}
						/>
						<Route
							path={routerConfig.films}
							element={
								<ProtectedRoute>
									<MoviesPage />
								</ProtectedRoute>
							}
						/>
						<Route
							path={`${routerConfig.films}/:id`}
							element={
								<ProtectedRoute>
									<MoviePage />
								</ProtectedRoute>
							}
						/>
						<Route
							path={`${routerConfig.films}/:id/:personId`}
							element={
								<ProtectedRoute>
									<PersonPage />
								</ProtectedRoute>
							}
						/>

						<Route
							index
							path={`${routerConfig.editUser}*`}
							element={
								<ProtectedRoute>
									<EditUserPage />
								</ProtectedRoute>
							}
						/>
					</Route>
				</>
			)
		)
	}, [])

	return <RouterProvider router={router} />
}
