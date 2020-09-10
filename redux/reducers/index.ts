import { combineReducers } from 'redux';
import input from './input';
import list from './list';

const rootReducer = combineReducers({
    input,
    list,
})

export default rootReducer