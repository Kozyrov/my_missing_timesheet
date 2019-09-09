import * as entities from './Entities';
import * as result from './Result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    result,
    entities
})

export default rootReducer;