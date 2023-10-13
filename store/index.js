import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistingConfig = { key: 'root', storage: AsyncStorage };

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistingConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export const persistor = persistStore(store);
