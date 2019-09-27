import {
    CREATE_TIMESHEET,
    CREATE_PANELS,
    REGISTER_INPUT,
    FETCH_TIMESHEET
} from './ActionTypes';

import panelGenerator from '../EntityGenerators/panelGenerator';
import datesGenerator from '../EntityGenerators/datesGenerator';
// ASYNC Action Creators

export const requestTimeSheet = (timeSheetID) => {
    return (dispatch) => {
        dispatch(fetchTimeSheet(timeSheetID));
        return fetch(
            `http://localhost:4545/timesheet/${timeSheetID}`,
            {
                method: 'GET',
            }
        )
        .then(
            response => response.json(),
            error => dispatch(fetchTimeSheetError(error))
        )
        .then(
            json => {
                json["ID"] = timeSheetID;
                dispatch(fetchTimeSheetSuccess(json))
            }
                
        )
    }
}

// SYNCHRONUS Action Creators

// param: <int> timesheetID
export const fetchTimeSheet = (timeSheetID) => {
    return {
        type: FETCH_TIMESHEET,
        timeSheetID
    }
}

// param: error object
export const fetchTimeSheetError = (error) => { // TOTO: design more generic error handling actions
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
        payload:{
            ID: response.ID,
            dates: datesGenerator(response.workdays),
            panels: panelGenerator(response.workdays)
        }
    }
}

export const createPanels = (panels) => {
    return {
        type: CREATE_PANELS,
        panels
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