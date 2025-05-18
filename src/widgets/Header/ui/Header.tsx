import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Avatar } from 'antd'

import { UserOutlined } from '@ant-design/icons'

import { useAuthorize } from '@features/authentication'

import { User } from '@entities/User'

import styles from './header.module.scss'

export const Header = () => {
	const { resetAuthData, userCredentials } = useAuthorize()
	const navigate = useNavigate()

	const { email, displayName, photoURL } = userCredentials?.providerData[0]

	const logout = async () => {
		await resetAuthData()
		navigate('/login')
	}

	return (
		<div className={styles.header}>
			<User
				icon={photoURL ? <Avatar src={photoURL} /> : <UserOutlined />}
				userInfo={{
					name: displayName ?? 'no data',
					email
				}}
				onExit={logout}
			/>
		</div>
	)
}
