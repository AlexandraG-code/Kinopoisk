import { PropsWithChildren } from 'react'

import styles from './button.module.scss'
import { ButtonType, ButtonTypeEnum } from '../lib/button.types'
import { clsx } from 'clsx'

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
