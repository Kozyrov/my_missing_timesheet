import {
    FETCH_TIMESHEET,
    REGISTER_PANEL,
    REGISTER_INPUT
} from '../Actions/ActionTypes';

export const timesheets = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.payload.status) {
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
        case REGISTER_PANEL:
            return {
                ...state,
                [action.payload.result]: {
                    panels: [...state[action.payload.result].panels, action.payload.panelID]
                }
            }
        default:
            return state;
    }
}

export const panels = (state = {} , action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.payload.status) {
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
            switch (action.payload.status) {
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
        case FETCH_TIMESHEET:
            switch (action.payload.status) {
                case 'success':
                    return action.payload.inputs;
                default: 
                    return state;
            }
        case REGISTER_INPUT:
            return {
                ...state,
                [action.payload.ID]: {
                    ...state[action.payload.ID],
                    value: action.payload.value
                }
            }
        default:
            return state;
    }
    
}