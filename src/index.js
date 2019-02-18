import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {store, persistor} from './store'
import AppRouter from './appRouter/AppRouter'
import 'semantic-ui-css/semantic.min.css'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/loading'

const jsx = (
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppRouter/>
        </PersistGate>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
