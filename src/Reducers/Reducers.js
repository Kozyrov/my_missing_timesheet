import { initialState } from './State';
import {
    CREATE_TIMESHEET
} from '../Actions/ActionTypes';

function timesheets(state = initialState.entities.timesheets, action) {
    switch(action.type) {
        case CREATE_TIMESHEET:
            return {
                ...state,
                
            }
        default:
            return state;
    }
    
}

function panels(state = initialState.entities.panels, action) {
    return state;
}

function dates(state = initialState.entities.dates, action) {
    return state;
}

function inputs(state = initialState.entities.inputs, action) {
    return state;
}
