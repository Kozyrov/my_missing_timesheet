import {
    FETCH_TIMESHEET,
    SELECT_INPUT,
    REGISTER_PANEL
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
        case REGISTER_PANEL:
            return {
                ...state,
                panels: [...state.panels, action.payload.panelID]
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
        case REGISTER_PANEL:
            return {
                ...state,
                input: action.payload.inputID
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
        case FETCH_TIMESHEET:
            switch (action.status) {
                case 'success':
                    return action.payload.inputs;
                default: 
                    return state;
            }
        case SELECT_INPUT:
            return {
                ...state,
                [action.ID]: {
                    selected: !state[action.ID].selected
                }
            }
        default:
            return state;
    }
    
}