import React, { useMemo } from 'react'
import { routerConfig } from '@shared/config/router.config'
import { NotFoundPage } from '@pages/NotFound'
import { MainPage } from '@pages/Main'
import { AboutPage } from '@pages/About'
import { MainLayout } from '@pages/Layout/ui/MainLayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { MoviesPage } from '@pages/MoviesPage'
import { MoviePage } from '@pages/MoviePage'

export const Router = () => {
	const router = useMemo(() => {
		return createBrowserRouter(
			createRoutesFromElements(
				<Route  path="/*" element={<MainLayout />}>
					<Route index path={`${routerConfig.main}*`} element={<MainPage />} />
					<Route path={routerConfig.about} element={<AboutPage />} />
					<Route path={routerConfig.notFound} element={<NotFoundPage />} />
					<Route path={routerConfig.films} element={<MoviesPage />} />
					<Route path={`${routerConfig.films}/:id`} element={<MoviePage />} />
				</Route>
			)
		)
	}, [])

	return <RouterProvider router={router} />
}
