import {
    CREATE_TIMESHEET,
    FETCH_TIMESHEET
} from '../Actions/ActionTypes';
import inputGenerator from '../EntityGenerators/inputGenerator';

export const timesheets = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.status) {
                case 'success':
                    return {
                        ...state,
                        [action.response.ID]: {
                            "id": action.response.ID,
                            "panels": [] 
                        }
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
}

export const panels = (state = {} , action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            return state;
        default: 
            return state;
    }
}

export const dates = (state = [], action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
                switch (action.status) {
                    case 'success':
                        return action.response.workdays;
                    default: 
                        return state;
                }
        default:
            return state;
    }
}

export const inputs = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TIMESHEET:
            return {
                ...state,
                inputs: inputGenerator(action.payload.payPeriod)
            }
        default:
            return state;
    }
}