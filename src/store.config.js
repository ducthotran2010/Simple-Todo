import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import hardSet from 'redux-persist/es/stateReconciler/hardSet';


const persistConfig = {
  key: 'todo-redux',
  storage,
  stateReconciler: hardSet,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const customMiddleware = store => next => action => {
  console.log("MIDDLEWARE: I do nothing and execute: ", action)
  next(action);
}

export const store = createStore(persistedReducer, applyMiddleware(customMiddleware))
export const persistor = persistStore(store)
