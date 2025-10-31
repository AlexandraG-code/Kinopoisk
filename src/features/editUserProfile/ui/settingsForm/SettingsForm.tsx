import { Button, Form, FormProps, Input } from 'antd'

import { UpdateProfileDTO } from '@shared/service/firebase.service'

export interface ISettingsForm extends Omit<FormProps, 'initialValues'> {
	initialData: UpdateProfileDTO
}

export const SettingsForm = ({ initialData, ...formProps }: ISettingsForm) => {
	return (
		<Form {...formProps} initialValues={initialData}>
			<Form.Item label={'User name'} name={'displayName'}>
				<Input />
			</Form.Item>

			<Form.Item label={'User avatar'} name={'photoURL'}>
				<Input />
			</Form.Item>

			<Button type="primary" htmlType="submit">
				Save
			</Button>
		</Form>
	)
}
