import {  NavLink } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import styles from './sidebarLink.module.scss'
import { clsx } from 'clsx'

interface ISidebarLink extends PropsWithChildren {
	to: string
}

export const SidebarLink = ({ to, children }: ISidebarLink) => {
	return (
		<NavLink
			className={({ isActive }) =>
				clsx(styles.link, {
					[styles.active]: isActive
				})
			}
			to={to}
		>
			{children}
		</NavLink>
	)
}
