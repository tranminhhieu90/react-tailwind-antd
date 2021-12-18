import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import {rootReducer} from '../reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "app",
  storage,
  // whitelist: ['counter']
  whitelist: []
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store)