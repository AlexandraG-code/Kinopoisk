import React from 'react'

import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

import '../env-config'

import {Router} from '@app/router/Router'
import {store} from '@app/store/BoundingStore'

import '@shared/styles/index.scss'



createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Router/>
    </Provider>
)
