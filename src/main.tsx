import React from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '../env-config'

import { Router } from '@app/router/Router'
import { persistor, store } from '@app/store/BoundingStore'

import '@shared/styles/index.scss'


createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router />
		</PersistGate>
	</Provider>
)
