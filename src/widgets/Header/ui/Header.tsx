import React from 'react'

import { UserOutlined } from '@ant-design/icons'

import { User } from '@entities/User'

import styles from './header.module.scss'
import { useAuthorize } from '@features/authentication/model/useAuthorize'

export const Header = () => {

	return (
		<div className={styles.header}>
			<User
				icon={<UserOutlined />}
				userInfo={{
					name: 'user',
					login: '@user'
				}}
				// onExit={() => resetAuthData()}
			/>
		</div>
	)
}
