import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from '../redux/rootreducer'

const middlewares = [...getDefaultMiddleware({
  serializableCheck:false
})];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export const store =  configureStore({
  reducer: rootReducer,
  middlewares,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default {store, persistor};
