import { useAuthorize } from '@features/authentication'
import { EditUserCard } from '@features/editUserProfile'

export const EditUserPage = () => {
	const { currentUser } = useAuthorize()
	const { displayName, photoURL } = currentUser ?? {}

	return (
		<EditUserCard
			formProps={{
				initialData: { displayName, photoURL }
			}}
		/>
	)
}
