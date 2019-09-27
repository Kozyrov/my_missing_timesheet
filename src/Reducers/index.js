import {
    timesheets,
    dates,
    panels
} from './Entities';
import result from './Result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    result,
    timesheets,
    dates,
    panels
})

export default rootReducer;