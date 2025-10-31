import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button, Card, Form, FormProps, Input } from 'antd'

import { AppDispatch, RootState } from '@app/store/BoundingStore'

import { GetUserDTO } from '@shared/service/firebase.service'

import { login } from '../../model'

import styles from './AuthForm.module.scss'

interface IAuthForm extends FormProps {}

export const AuthForm = ({ ...props }: IAuthForm) => {
	const [authForm] = Form.useForm<GetUserDTO>()

	const { loading } = useSelector((state: RootState) => state.auth)
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()

	const onFinish: FormProps['onFinish'] = async (data: GetUserDTO) => {
		await dispatch(login(data))
		navigate(`/main`)
	}

	return (
		<Card className={styles.form}>
			<Form layout="vertical" form={authForm} {...props} onFinish={onFinish}>
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
