import {
    timesheets,
    dates,
} from './Entities';
import result from './Result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    result,
    timesheets,
    dates
})

export default rootReducer;