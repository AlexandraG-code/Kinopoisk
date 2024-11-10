import React, { cloneElement, ReactElement } from 'react'
import { Button, Divider, Flex, Menu, Popover } from 'antd'

import styles from './user.module.scss'

export interface IUser {
	icon: ReactElement
	userInfo: {
		login: string
		name: string
	}
	onExit: () => void
}

export const User = ({ icon, userInfo, onExit }: IUser) => {
	return (
		<Popover
			placement={'left'}
			trigger={'click'}
			content={
				<Flex vertical gap={'0.2em'}>
					<div>Login: {userInfo.login}</div>
					<div>Name: {userInfo.name}</div>
					<Button danger onClick={onExit}>
						Exit
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
