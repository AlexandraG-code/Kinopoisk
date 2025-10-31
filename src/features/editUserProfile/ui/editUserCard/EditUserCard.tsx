import { Card, FormProps } from 'antd'

import { FirebaseService } from '@shared/service/firebase.service'

import { ISettingsForm, SettingsForm } from '../settingsForm/SettingsForm'

export interface IEditProfileCard {
	formProps: ISettingsForm
}

export const EditUserCard = ({ formProps }: IEditProfileCard) => {
	const updateUser: FormProps['onFinish'] = async (newData) => {
		await FirebaseService.updateUserProfile(newData)
			?.then()
			.catch((e) => console.log(e))
	}

	return (
		<Card>
			<SettingsForm {...formProps} onFinish={updateUser} />
		</Card>
	)
}
