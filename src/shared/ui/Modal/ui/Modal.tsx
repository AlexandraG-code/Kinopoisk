import { PropsWithChildren } from 'react'

import { createPortal } from 'react-dom'

import { Button, Flex } from 'antd'

import styles from './modal.module.scss'

export interface IModal extends PropsWithChildren {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const CustomModal = ({ isOpen, setIsOpen, children }: IModal) => {
	const modalJSX = (
		<div className={styles.overlay}>
			<Flex vertical gap="1em" className={styles.modal}>
				<Flex justify="flex-end">
					<Button type="text" onClick={() => setIsOpen(false)}>
						X
					</Button>
				</Flex>
				<div>{children}</div>
				<Flex justify="flex-end">
					<Button type="primary" onClick={() => setIsOpen(false)}>
						Закрыть
					</Button>
				</Flex>
			</Flex>
		</div>
	)

	const modalElement = createPortal(modalJSX, document.body)
	return isOpen ? modalElement : null
}
