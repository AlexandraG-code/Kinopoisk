import { ReactNode, cloneElement, isValidElement, memo, useMemo } from 'react'

import { clsx } from 'clsx'

import styles from './avatarBox.module.scss'

export interface IAvatarBox {
	children: ReactNode
}

export const AvatarBox = memo(({ children }: IAvatarBox) => {
	const childrenBox = useMemo(
		() => getClone(),

		[children]
	)

	function getClone() {
		if (!isValidElement(children)) {
			return null
		}
		return cloneElement(children, {
			...children.props,
			className: clsx(styles.avatarImg, children.props.className)
		})
	}

	return <div className={clsx(styles.avatarBox)}>{childrenBox}</div>
})
