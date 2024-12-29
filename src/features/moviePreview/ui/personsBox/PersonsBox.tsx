import { Card, Flex } from 'antd'
import { clsx } from 'clsx'
import styles from './PersonsBox.module.scss'
import React, { useEffect } from 'react'
import { useMovieContext } from '../../model/MovieProvider'
import { Avatar } from '../avatar/Avatar'
import { AvatarBox } from '../avatarBox/AvatarBox'

export const PersonsBox = () => {
	const { movie: movieInfo } = useMovieContext()

	useEffect(() => {
		console.log(movieInfo, 'in PersonsBox')
	}, [movieInfo])

	return (
		<Flex className={clsx(styles.personsContainer)} align={'center'}>
			{movieInfo?.persons?.map((person) => (
				<Flex vertical>

					<Card>
						<AvatarBox>
							<Avatar imgUrl={person.photo ?? ''} alt={person.name ?? ''} />
						</AvatarBox>
						<h3>{person.name}</h3>
						<div>{person.profession}</div>
						<div>{person.description}</div>
					</Card>
				</Flex>
			))}
		</Flex>
	)
}
