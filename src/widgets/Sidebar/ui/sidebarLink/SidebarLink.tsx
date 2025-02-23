import React, { PropsWithChildren } from 'react'

import { NavLink } from 'react-router-dom'

import { clsx } from 'clsx'

import styles from './sidebarLink.module.scss'

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
