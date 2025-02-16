import React, { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { Flex, Spin } from 'antd'
import { clsx } from 'clsx'

import { useMovieContext } from '../../model/MovieProvider'
import { PersonsBox } from '../personsBox/PersonsBox'

import styles from './moviePreview.module.scss'

export const MoviePreview = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { movie: movieInfo, loadMovieData, loading } = useMovieContext()
	useEffect(() => {
		if (!id) {
			return
		}

		loadMovieData(Number(id))
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
				<PersonsBox persons={movieInfo?.persons ?? []} onSelectPerson={(personId) => navigate(`${personId}`)} />
			</Flex>
		</Spin>
	)
}
