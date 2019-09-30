import {
    FETCH_TIMESHEET
} from "../Actions/ActionTypes";

const result = (state = null, action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch (action.payload.status) {
                case 'success':
                    return action.payload.ID;
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default result;