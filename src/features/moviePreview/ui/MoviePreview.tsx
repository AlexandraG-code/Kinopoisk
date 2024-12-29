import { Card, Flex, Spin } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '@app/store/BoundingStore'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovieById } from '../model/movieSlice'
import styles from './moviePreview.module.scss'
import { clsx } from 'clsx'
import { useMovieContext } from '../model/MovieProvider'
import { PersonsBox } from './personsBox/PersonsBox'

export const MoviePreview = () => {
	const { id } = useParams()

	const dispatch: AppDispatch = useDispatch()
	// const { loading, movieInfo } = useSelector((state: RootState) => state.movie)
	const { movie: movieInfo, loadMovieData, loading } = useMovieContext()

	// useEffect(() => {
	// 	if (!id) {
	// 		return
	// 	}
	//
	// 	dispatch(loadMovieById(parseInt(id)))
	//
	// }, [id])

	useEffect(() => {
		if (!id) {
			return
		}

		loadMovieData(id)
	}, [id])

	return (
		<Spin spinning={loading}>
			<Flex justify={'center'} vertical align={'center'}>
				<Flex className={styles.container}>
					<div className={clsx(styles.mainPoster)}>
						<img src={movieInfo?.poster?.url ?? ''} alt="" />
					</div>

					<Flex align="center" gap={'1em'} vertical>
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
				<PersonsBox  />
			</Flex>
		</Spin>
	)
}
