import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import AppRouter from './appRouter/AppRouter'
import 'semantic-ui-css/semantic.min.css'


const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
