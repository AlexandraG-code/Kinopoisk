import { Flex } from 'antd'

import { routerConfig } from '@shared/config/router.config.js'

import styles from './sidebar.module.scss'
import { SidebarLink } from './sidebarLink/SidebarLink.js'

export const Sidebar = () => {
	return (
		<Flex vertical className={styles.sidebarContainer}>
			<SidebarLink to={routerConfig.main}>Main page</SidebarLink>
			<SidebarLink to={routerConfig.about}>About page</SidebarLink>
			<SidebarLink to={routerConfig.films}>Films</SidebarLink>
		</Flex>
	)
}
