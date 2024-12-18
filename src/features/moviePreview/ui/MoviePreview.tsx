import { Card, Flex, Spin } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '@app/store/BoundingStore'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovieById } from '../model/movieSlice'
import styles from './moviePreview.module.scss'
import { clsx } from 'clsx'

export const MoviePreview = () => {
	const { id } = useParams()

	const dispatch: AppDispatch = useDispatch()
	const { loading, movieInfo } = useSelector((state: RootState) => state.movie)

	useEffect(() => {
		if (!id) {
			return
		}

		dispatch(loadMovieById(parseInt(id)))

	}, [id])

	return (
		<Spin spinning={loading}>
			<Flex justify={'center'} vertical align={'center'}>
				<Flex className={styles.container}>
					<div  className={clsx(styles.mainPoster)}>
						<img src={movieInfo?.poster?.url ?? ''} alt="" />
					</div>
					<Flex  align="center" gap={'1em'} vertical>
						<div>
							<h2>{movieInfo?.name}</h2>
							<div>{movieInfo?.description}</div>
						</div>
						<div>
							<div> Рейтинг imdb:{movieInfo?.rating?.imdb}</div>
							<div>Жанр {movieInfo?.genres?.map((genre) => <div>{genre.name}</div>)} </div>
						</div>
					</Flex>
				</Flex>
				<Flex className={clsx(styles.personsContainer)} align={'center'}>
					{movieInfo?.persons?.map((person) => (
						<Flex vertical>
							<Card>
								<div className={clsx(styles.poster)}>
									<img src={person.photo ?? ''} alt={person.name ?? ''} />
								</div>

								<h3>{person.name}</h3>
								<div>{person.profession}</div>
								<div>{person.description}</div>
							</Card>
						</Flex>
					))}
				</Flex>
			</Flex>
		</Spin>
	)
}
