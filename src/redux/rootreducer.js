import {combineReducers} from 'redux';  

import todoReducer from './todo/reducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['todo']
}

const rootReducer = combineReducers({
    todo : todoReducer
})

export default persistReducer(persistConfig,rootReducer);