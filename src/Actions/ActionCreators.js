import { CREATE_TIMESHEET, ASSIGN_PAY_PERIOD, REGISTER_INPUT } from './ActionTypes';

// param: Array<date> payPeriod
export function assignPayPeriod(payPeriod) {
    return { 
        type: ASSIGN_PAY_PERIOD,
        payPeriod
    }
}

//param: Array<date> payPeriod
export function newTimesheet(payPeriod) {
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

//param: int inputID used to create relationships between the input field and it's parent container(s)
export function registerInput(inputID) {
    return {
        type: REGISTER_INPUT,
        inputID
    }
}