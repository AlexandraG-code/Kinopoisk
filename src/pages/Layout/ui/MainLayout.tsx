import React from 'react'

import { Outlet } from 'react-router-dom'

import { Header } from '@widgets/Header'
import { Sidebar } from '@widgets/Sidebar'

import styles from './mainLayout.module.scss'

export const MainLayout = () => {
	return (
		<div className={styles.mainContainer}>
			<div>
				<Header />
			</div>
			<div className={styles.contentContainer}>
				<aside>
					<Sidebar />
				</aside>
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
