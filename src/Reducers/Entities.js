import {
    CREATE_TIMESHEET,
    ASSIGN_PAYPERIOD
} from '../Actions/ActionTypes';
import { initialState } from './State';
import panelGenerator from '../EntityGenerators/panelGenerator';

const initialEntities = initialState.entities;

export const timesheets = (state = initialEntities, action) => {
    switch(action.type) {
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
                panels: panelGenerator(action.payload.payPeriod),
            }
        default: 
            return state;
    }
}

export const dates = (state = initialEntities, action) => {
    switch(action.type) {
        case (ASSIGN_PAYPERIOD || CREATE_TIMESHEET):
            return action.payload.payPeriod;
        default:
            return state;
    }
}

export const inputs = (state = initialEntities, action) => {
    return state;
}