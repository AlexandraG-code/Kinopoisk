import React from 'react'

import { Button, Card, Flex } from 'antd'
import { clsx } from 'clsx'

import { PersonInMovie } from '@shared/types/types'

import { Avatar } from '../avatar/Avatar'
import { AvatarBox } from '../avatarBox/AvatarBox'

import styles from './PersonsBox.module.scss'

export interface IPersonsBox {
	persons: PersonInMovie[]
	onSelectPerson?: (id: number) => void
}

export const PersonsBox = ({ persons, onSelectPerson }: IPersonsBox) => {
	return (
		<Flex className={clsx(styles.personsContainer)} align={'center'}>
			{persons?.map((person) => (
				<Flex vertical onClick={() => onSelectPerson?.(person?.id)}>
					<Card>
						<AvatarBox>
							<Avatar className={'test ___1234'} imgUrl={person.photo ?? ''} alt={person.name ?? ''} />
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
