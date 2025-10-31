import { UserCredential, updateProfile } from '@firebase/auth'

import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '@shared/config/firebase.config'

export interface GetUserDTO {
	email: string
	password: string
}

export interface UpdateProfileDTO {
	displayName: string
	photoURL: string
}

export const FirebaseService = {
	async firebaseLogin(params: GetUserDTO) {
		return (await signInWithEmailAndPassword(auth, params.email, params.password)) as UserCredential
	},

	async firebaseLogout() {
		return await signOut(auth)
	},

	async updateUserProfile(params: UpdateProfileDTO) {
		if (!auth?.currentUser) {
			return
		}

		return await updateProfile(auth.currentUser, { ...params })
	}
}
