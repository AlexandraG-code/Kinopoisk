import React, { ReactElement, cloneElement } from 'react'

import { Button, Divider, Flex, Menu, Popover } from 'antd'

import styles from './user.module.scss'

export interface IUser {
	icon: ReactElement
	userInfo: {
		email: string
		name: string
	}
	onExit: () => void
	onEdit: () => void
}

export const User = ({ icon, userInfo, onExit, onEdit }: IUser) => {
	return (
		<Popover
			placement={'left'}
			trigger={'click'}
			content={
				<Flex vertical gap={'0.5em'}>
					<div>Login: {userInfo?.email}</div>
					<div>Name: {userInfo?.name}</div>
					<Button danger onClick={onExit}>
						Exit
					</Button>

					<Button type={'primary'} onClick={onEdit}>
						Edit profile
					</Button>
				</Flex>
			}
		>
			<Flex className={styles.userIcon} justify={'center'} align={'center'}>
				{cloneElement(icon, { className: styles.avatar })}
			</Flex>
		</Popover>
	)
}
