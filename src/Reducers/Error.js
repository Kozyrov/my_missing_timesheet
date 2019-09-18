import { FETCH_TIMESHEET } from '../Actions/ActionCreators';

export const hasError = (state = false, action) => {
    switch (action.type) {
        case FETCH_TIMESHEET:
            switch(action.status) {
                case 'error':
                    return true;
                default:
                    return state;
            }
        default:
            return state;
    }
}

export const errorMessage = (state = null, action) => {
    switch (action.type) {
        case  FETCH_TIMESHEET:
            switch(action.status) {
                case 'error':
                    return action.error.message;
                default:
                    return state;
            }
        default:
            return state;
    }
}