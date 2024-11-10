import React, { useEffect } from 'react'
import { Card, Divider, Flex, Pagination, Spin } from 'antd'
import { loadAllFilms, updatePagination } from '../model/viewMoviesSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@app/store/BoundingStore'
import styles from './moviesList.module.scss'
import { clsx } from 'clsx'

export const MoviesList = () => {
	const { key } = useLocation()
	const dispatch: AppDispatch = useDispatch()

	const { filmsList, loading, pagination } = useSelector((state: RootState) => state.viewFilms)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(loadAllFilms(pagination))
	}, [pagination, key])

	return (
		<Spin spinning={loading}>
			<Flex vertical justify={'space-between'} gap={'2em'}>
				<div className={clsx(styles.container)}>
					<Card title="Фильмы">
						{filmsList?.docs?.map((film) => (
							<Card.Grid
								key={film.id}
								onClick={() => {
									if (film.id) navigate(`${film.id}`)
								}}
							>
								<div className={styles.poster}>
									<img src={film?.poster?.previewUrl ?? ''} alt={film.name ?? ''} />
								</div>
								<h3>{film.name}</h3>
								<div>{film.alternativeName}</div>

								<Divider />
								<div>{film.description}</div>
								<div>
									<strong>IMDB</strong> {film?.rating?.imdb}
								</div>
								<div>Год: {film.year}</div>
							</Card.Grid>
						))}
					</Card>
				</div>

				<Pagination
					current={pagination.page}
					pageSize={pagination.limit}
					total={filmsList?.total}
					onChange={(page, limit) =>
						dispatch(
							updatePagination({
								limit,
								page
							})
						)
					}
				/>
			</Flex>
		</Spin>
	)
}
