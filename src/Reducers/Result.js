import {
    SET_CURRENT_TIMESHEET,
    CREATE_TIMESHEET
} from "../Actions/ActionTypes";
import { initialState } from './State';

var initialResult = initialState.result;

const result = (state = initialResult, action) => {
    switch (action.type) {
        case SET_CURRENT_TIMESHEET:
            return action.payload.result;
        case CREATE_TIMESHEET:
            return action.payload.ID;
        default:
            return state;
    }
}

export default result;