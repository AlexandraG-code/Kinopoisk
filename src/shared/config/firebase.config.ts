import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCFNj8muPMkcKuaIG8Wze8NhPhYpaSoHb0',
	authDomain: 'testauth-5eac2.firebaseapp.com',
	projectId: 'testauth-5eac2',
	storageBucket: 'testauth-5eac2.appspot.com'
	// messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
	// appId: 'YOUR_APP_ID'
}

// Инициализация Firebase
const app = initializeApp(firebaseConfig)

// Экспортируйте экземпляр аутентификации
const auth = getAuth(app)

export { auth }
