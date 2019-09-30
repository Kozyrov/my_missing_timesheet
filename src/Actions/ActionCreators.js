import {
    SELECT_INPUT,
    FETCH_TIMESHEET,
    REGISTER_PANEL,
    REGISTER_INPUT
} from './ActionTypes';

//TODO: payload for every action creator


import panelGenerator from '../EntityGenerators/panelGenerator';
import datesGenerator from '../EntityGenerators/datesGenerator';
import inputGenerator from '../EntityGenerators/inputGenerator';
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
        payload: {
            timeSheetID
        }
    }
}

// param: error object
export const fetchTimeSheetError = (error) => { // TOTO: design more generic error handling actions
    return {
        type: FETCH_TIMESHEET,
        payload: {
            status: 'error',
            error
        }
    }
}

// param: response object
export const fetchTimeSheetSuccess = (response) => {
    return {
        type: FETCH_TIMESHEET,
        payload:{
            status: 'success',
            ID: response.ID,
            dates: datesGenerator(response.workdays),
            panels: panelGenerator(response.workdays),
            inputs: inputGenerator(response.workdays)
        }
    }
}

export const registerPanel = (panelID, result) => {
    return {
        type: REGISTER_PANEL,
        payload: {
            panelID,
            result
        }
    }
}

export const registerInput = (ID, value) => {
    return {
        type: REGISTER_INPUT,
        payload: {
            ID, 
            value
        }
    }

}


export const selectInput = (ID) => {
    return {
        type: SELECT_INPUT,
        payload: {
            ID
        }
    }
}