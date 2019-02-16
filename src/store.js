import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from './sagas/rootSaga'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  // create a redux store with our reducer above and middleware
const persistedReducer = persistReducer(persistConfig, rootReducer)

// run the saga

export const store = createStore(
                    persistedReducer,
                    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  )
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);




