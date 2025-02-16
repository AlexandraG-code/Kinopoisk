import React, { useEffect } from 'react'

import { clsx } from 'clsx'

import styles from './avatar.module.scss'

export interface IAvatar {
	imgUrl: string
	alt: string
	className?: string
	onClick?: () => void
}

export const Avatar = ({ imgUrl, alt, className, onClick }: IAvatar) => {
	useEffect(() => {})

	return <img src={imgUrl} alt={alt} className={clsx(styles.avatar, className)} onClick={() => onClick?.()} />
}
