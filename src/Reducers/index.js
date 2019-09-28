import {
    timesheets,
    dates,
    panels,
    inputs
} from './Entities';
import result from './Result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    result,
    timesheets,
    dates,
    panels,
    inputs
})

export default rootReducer;