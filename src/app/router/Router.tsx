import React, { useMemo } from 'react'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { AboutPage } from '@pages/About'
import { MainLayout } from '@pages/Layout/ui/MainLayout'
import { MainPage } from '@pages/Main'
import { MoviePage } from '@pages/MoviePage'
import { MoviesPage } from '@pages/MoviesPage'
import { NotFoundPage } from '@pages/NotFound'
import { PersonPage } from '@pages/PersonPage/ui/PersonPage'

import { routerConfig } from '@shared/config/router.config'

export const Router = () => {
	const router = useMemo(() => {
		return createBrowserRouter(
			createRoutesFromElements(
				<>
					<Route path={routerConfig.notFound} element={<NotFoundPage />} />

					<Route path="/*" element={<MainLayout />}>
					<Route index path={`${routerConfig.main}*`} element={<MainPage />} />
					<Route path={routerConfig.about} element={<AboutPage />} />
					<Route path={routerConfig.films} element={<MoviesPage />} />
					<Route path={`${routerConfig.films}/:id`} element={<MoviePage />} />
					<Route path={`${routerConfig.films}/:id/:personId`} element={<PersonPage />} />
				</Route>
				</>

			)
		)
	}, [])

	return <RouterProvider router={router} />
}
