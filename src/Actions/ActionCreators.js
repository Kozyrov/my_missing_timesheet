import {
    CREATE_TIMESHEET,
    ASSIGN_PAY_PERIOD,
    REGISTER_INPUT,
    FETCH_TIMESHEET
} from './ActionTypes';
import { from } from 'rxjs';
import { timesheets } from '../Reducers/mockData';

// ASYNC Action Creators

export const requestTimeSheet = (timeSheetID) => {
    const thunk = (dispatch) => {
        dispatch(fetchTimeSheet(timeSheetID));
        const request = from(fetch(timesheets[timeSheetID])); // fetching mock data
        request.subscribe({
            next(response) {
                return dispatch(fetchTimeSheetSuccess(response));
            },
            error(err) {
                return dispatch(fetchTimesheetError(err));
            }
        })
    }
    return thunk;
}

//SYNCHRONUS Action Creators

// param: <int> timesheetID
export const fetchTimeSheet = (timeSheetID) => {
    return {
        type: FETCH_TIMESHEET,
        timeSheetID
    }
}

// param: error object
export const fetchTimesheetError = (error) => {
    return {
        type: FETCH_TIMESHEET,
        status: 'error',
        error
    }
}

// param: response object
export const fetchTimeSheetSuccess = (response) => {
    return {
        type: FETCH_TIMESHEET,
        status: 'success',
        response
    }
}

// param: Array<date> payPeriod
export const assignPayPeriod = (payPeriod) => {
    return { 
        type: ASSIGN_PAY_PERIOD,
        payPeriod
    }
}

// param: Array<date> payPeriod
export const newTimeSheet = (payPeriod) => {
    const uuidv1 = require('uuid/v1');
    const ID = uuidv1(); // create a new timestamp generated uuid
    return {
        type: CREATE_TIMESHEET,
        payload: {
            ID,
            payPeriod
        }
    } 
}

// param: int inputID used to create relationships between the input field and it's parent container(s)
export const registerInput = (inputID) => {
    return {
        type: REGISTER_INPUT,
        inputID
    }
}