import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from './reducer/RootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  whitelist: ['ThemeReducer'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store, null, () => {
  console.log({name: 'Persisted state', value: store.getState()});
});
