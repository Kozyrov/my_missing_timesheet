import {
    FETCH_TIMESHEET
} from '../Actions/ActionTypes';

export const timesheets = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.status) {
                case 'success':
                    return {
                        ...state,
                        [action.payload.ID]: {
                            "id": action.payload.ID,
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
            switch (action.status) {
                case 'success':
                    return action.payload.panels;
                default: 
                    return state;
            }
        default: 
            return state;
    }
}

export const dates = (state = [], action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.status) {
                case 'success':
                    return action.payload.dates;
                default: 
                    return state;
            }
        default:
            return state;
    }
}

export const inputs = (state = {}, action) => {
    switch (action.type){
        default:
            return state;
    }
    
}