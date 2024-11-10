import styles from './header.module.scss'
import { User } from '@entities/User'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

export const Header = () => {
	return (
		<div className={styles.header}>
			<User
				icon={<UserOutlined />}
				userInfo={{
					name: 'user',
					login: '@user'
				}}
				onExit={() => console.log('exit')}
			/>
		</div>
	)
}
