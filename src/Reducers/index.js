import * as entities from './Entities';
import result from './Result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    result,
    entities
})

export default rootReducer;