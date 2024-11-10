import '../env-config'

import React from 'react'
import { createRoot } from 'react-dom/client'

import '@shared/styles/index.scss'
import { Router } from '@app/router/Router'
import { Provider } from 'react-redux'
import { store } from '@app/store/BoundingStore'

createRoot(document.getElementById('root')!).render(
	// <StrictMode> // вызывает двойной рендеринг для выявления побочных эффектов
		<Provider store={store}>
			<Router />
		</Provider>
	// </StrictMode>
)
