import {
    FETCH_TIMESHEET
} from "../Actions/ActionTypes";

const result = (state = null, action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.status) {
                case 'error':
                    return state;
                case 'success':
                    return state;
                default:
                    return action.timeSheetID;
            }
        default:
            return state;
    }
}

export default result;