import {
    CREATE_TIMESHEET,
    ASSIGN_PAY_PERIOD,
    // REGISTER_INPUT
} from '../Actions/ActionTypes';
import { initialState } from './State';
import panelGenerator from '../EntityGenerators/panelGenerator';
import inputGenerator from '../EntityGenerators/inputGenerator';

const initialEntities = initialState.entities;

export const timesheets = (state = initialEntities, action) => {
    switch (action.type) {
        case CREATE_TIMESHEET:
            return {
                ...state,
                timesheets: {
                    [action.payload.ID] : {
                        id: action.payload.ID,
                        panels: Object.keys(state.panels)
                    }
                }
            }
        default:
            return state;
    }
}

export const panels = (state = initialEntities , action) => {
    switch (action.type) {
        case CREATE_TIMESHEET:
            return {
                ...state,
                panels: panelGenerator(action.payload.payPeriod)
            }
        // case REGISTER_INPUT: 
        //     return {
        //         ...state,

        //     }
        default: 
            return state;
    }
}

export const dates = (state = initialEntities, action) => {
    switch (action.type) {
        case (ASSIGN_PAY_PERIOD || CREATE_TIMESHEET):
            return action.payload.payPeriod;
        default:
            return state;
    }
}

export const inputs = (state = initialEntities, action) => {
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