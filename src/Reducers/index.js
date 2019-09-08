import * as entities from './Entities';
import * as result from './Result';
import { combineReducers } from 'redux';

const myMissingTimesheet = combineReducers({
    result,
    entities
})

export default myMissingTimesheet;