import {cloneElement, isValidElement, memo, ReactElement, ReactNode, useMemo} from 'react'

export interface IAvatarBox {
	children: ReactNode
}

import { clsx } from 'clsx'
import styles from './avatarBox.module.scss'

export const AvatarBox = memo(({ children }: IAvatarBox) => {


	const clickHandle = () => {
		console.log('click')
	}

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
			className: clsx(styles.avatarImg, children.props.className),
			onClick: clickHandle
		})
	}

	return <div className={clsx(styles.avatarBox)}>{childrenBox}</div>
})
