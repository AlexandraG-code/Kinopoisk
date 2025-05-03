import { useDispatch, useSelector } from 'react-redux'

import { Button, Card, Flex, Form, FormProps, Input } from 'antd'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { RootState } from '@app/store/BoundingStore'

import { auth } from '@shared/config/firebase.config'

import { login } from '../../model'
import { useEffect } from 'react'

interface IAuthForm extends FormProps {}

export const AuthForm = ({ ...props }: IAuthForm) => {
	const [authForm] = Form.useForm()

	const { loading } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()

	const onFinish: FormProps['onFinish'] = async (data: any) => {
		dispatch(login(data))
	}

	const { isAuthenticated , userCredentials} = useSelector((state: RootState) => state.auth)

	useEffect(() => {
		console.log(userCredentials,'isAuthenticated')
	}, [isAuthenticated])

	return (
		<Card>
			<Form form={authForm} {...props} onFinish={onFinish}>
				<Form.Item name="email" label="Имя пользователя/Email">
					<Input placeholder="Имя пользователя" />
				</Form.Item>
				<Form.Item name="password" label="Пароль">
					<Input.Password placeholder="Введите пароль" />
				</Form.Item>

				<Button block type="primary" htmlType="submit" loading={loading}>
					Войти
				</Button>
			</Form>
		</Card>
	)
}
