import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import { ButtonType, ButtonTypeEnum } from '../lib/button.types'

import styles from './button.module.scss'

export interface IButton extends PropsWithChildren {
	type?: ButtonType
}

export const Button = ({ children, type }: IButton) => {
	return (
		<button
			className={clsx(styles.button, {
				[styles.primary]: type === ButtonTypeEnum.Primary,
				[styles.error]: type === ButtonTypeEnum.Error,
				[styles.success]: type === ButtonTypeEnum.Success
			})}
		>
			{children}
		</button>
	)
}
