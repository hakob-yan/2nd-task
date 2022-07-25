import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { payReducer } from './payReducer';


export const rootReducer = combineReducers({ payReducer, errorReducer })

