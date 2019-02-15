import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import AppRouter from './appRouter/AppRouter'
import 'semantic-ui-css/semantic.min.css'
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from './sagas/rootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
// run the saga
sagaMiddleware.run(rootSaga);
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
