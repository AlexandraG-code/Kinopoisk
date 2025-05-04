import { UserCredential } from '@firebase/auth'

import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '@shared/config/firebase.config'

export interface LoginDTO {
	email: string
	password: string
}

export const FirebaseService = {
	async firebaseLogin(params: LoginDTO) {
		return (await signInWithEmailAndPassword(auth, params.email, params.password)) as UserCredential
	},

	async firebaseLogout() {
		return await signOut(auth)
	}
}
