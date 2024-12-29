import React, {useEffect} from 'react'
import styles from './avatar.module.scss'

export interface IAvatar {
	imgUrl: string
	alt: string
}

export const Avatar = ({ imgUrl, alt }: IAvatar) => {
	useEffect(() => {

	})

	return <img src={imgUrl} alt={alt} className={styles.avatar} />
}
