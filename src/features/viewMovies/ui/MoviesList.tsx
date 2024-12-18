import React, { useEffect, useMemo } from 'react'
import { Button, Card, Divider, Flex, Form, Pagination, Select, Spin } from 'antd'
import { updateFilters, updatePagination } from '../model/viewMoviesSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@app/store/BoundingStore'
import styles from './moviesList.module.scss'
import { clsx } from 'clsx'
import { useGetDictionaryQuery } from '@entities/DictionaryLoader'
import { DictionaryTypes } from '@entities/DictionaryLoader'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { useForm } from 'antd/es/form/Form'
import { useGetAndFilterMoviesQuery } from '../api/movieApi.service'

export const MoviesList = () => {
	const dispatch: AppDispatch = useDispatch()

	const { pagination, filter } = useSelector((state: RootState) => state.viewFilms)
	const navigate = useNavigate()
	const [filterForm] = useForm()

	const options = {
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
		refetchOnReconnect: true
	}

	const { data: genres, isLoading } = useGetDictionaryQuery(DictionaryTypes.Genres, options)
	const { data: countries } = useGetDictionaryQuery(DictionaryTypes.Country, options)

	const {
		data: filmsList,
		isLoading: loadingMovie,
		error
	} = useGetAndFilterMoviesQuery(
		{
			...pagination,
			filter
		},
		options
	)

	const countriesOptions = useMemo(
		() =>
			countries?.map((item) => ({
				label: item.name,
				value: item.name
			})) as DefaultOptionType[],
		[countries]
	)

	const genresOptions = useMemo(
		() =>
			genres?.map((item) => ({
				label: item.name,
				value: item.name
			})) as DefaultOptionType[],
		[genres]
	)

	useEffect(() => {
		dispatch(
			updatePagination({
				page: 1,
				limit: 20
			})
		)
	}, [filter])

	return (
		// todo:  вынести в отдельный компонент
		<div>
			<Spin spinning={isLoading}>
				<div className={clsx(styles.filterContainer)}>
					<Form
						layout="inline"
						onFinish={(values) => {
							// dispatch(updateFilters(values))
							// dispatch(
							// 	updatePagination({
							// 		page: 1,
							// 		limit: 20
							// 	})
							// )
						}}
						form={filterForm}
					>
						<Form.Item label={'Страна'} name="country">
							<Select
								optionFilterProp="label"
								showSearch
								allowClear
								className={clsx(styles.filterItem)}
								options={countriesOptions}
								onChange={(value) => dispatch(updateFilters({ country: value }))}
							/>
						</Form.Item>
						<Form.Item label={'Жанр'} name="genre">
							<Select
								optionFilterProp="label"
								showSearch
								allowClear
								className={clsx(styles.filterItem)}
								options={genresOptions}
								onChange={(value) => dispatch(updateFilters({ genre: value }))}
							/>
						</Form.Item>

						<Form.Item>
							<Button htmlType="submit" type={'primary'}>
								Применить
							</Button>
						</Form.Item>
					</Form>
				</div>
				{/*//todo:  вынести в отдельный компонент*/}
			</Spin>

			<Spin spinning={loadingMovie}>
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
		</div>
	)
}
