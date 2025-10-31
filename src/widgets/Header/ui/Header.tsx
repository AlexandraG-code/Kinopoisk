import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Avatar } from 'antd'

import { UserOutlined } from '@ant-design/icons'

import { useAuthorize } from '@features/authentication'

import { User } from '@entities/User'

import { routerConfig } from '@shared/config/router.config'

import styles from './header.module.scss'

export const Header = () => {
	const { resetAuthData, currentUser } = useAuthorize()
	const navigate = useNavigate()

	const logout = async () => {
		await resetAuthData()
		navigate('/login')
	}

	return (
		<div className={styles.header}>
			<User
				icon={currentUser?.photoURL ? <Avatar src={currentUser?.photoURL} /> : <UserOutlined />}
				userInfo={{
					name: currentUser?.displayName ?? 'no data',
					email: currentUser?.email ?? 'no email'
				}}
				onExit={logout}
				onEdit={() => navigate(`${routerConfig.editUser}`)}
			/>
		</div>
	)
}
