import { Link } from 'react-router-dom'
import { Flex } from 'antd'
import { routerConfig } from '@shared/config/router.config'

import styles from './sidebar.module.scss'
import {SidebarLink} from "./sidebarLink/SidebarLink";
export const Sidebar = () => {
	return (
		<Flex vertical className={styles.sidebarContainer}>
			<SidebarLink to={routerConfig.main}>Main page</SidebarLink>
			<SidebarLink to={routerConfig.about}>About page</SidebarLink>
			<SidebarLink to={routerConfig.films}>Films</SidebarLink>
		</Flex>
	)
}