import { Flex } from 'antd'

import { AuthForm } from '@features/authentication'

export const AuthPage = () => {
	return (
		<Flex
			align={'center'}
			justify={'center'}
			style={{
				height: '100vh'
			}}
		>
			<AuthForm />
		</Flex>
	)
}
