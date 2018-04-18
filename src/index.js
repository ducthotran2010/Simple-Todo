import React from 'react'
import ReactDOM from 'react-dom'
import RootComponent from './components/rootComponent'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store.config'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RootComponent />
        </PersistGate>
    </Provider>
    , document.getElementById('root'))
