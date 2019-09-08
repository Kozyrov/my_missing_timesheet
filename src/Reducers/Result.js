import {
    SET_CURRENT_TIMESHEET,
    CREATE_TIMESHEET
} from "../Actions/ActionTypes";

export const result = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_TIMESHEET:
            return action.payload.result;
        case CREATE_TIMESHEET:
            return action.payload.ID;
        default:
            return state;
    }
    
}