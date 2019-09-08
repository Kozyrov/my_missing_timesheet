import { getWeeklyPayPeriod } from '../Reducers/mockData';

import { uuiv1 } from 'uuiv/v1';
import { CREATE_TIMESHEET, ASSIGN_PAY_PERIOD } from './ActionTypes';

// param: Array<date> payPeriod
export function assignPayPeriod(payPeriod) {
    return { 
        type: ASSIGN_PAY_PERIOD,
        payPeriod
    }
}

//param: Array<date> payPeriod
export function newTimesheet(payPeriod) {
    const ID = uuiv1(); // create a new timestamp generated uuid
    return {
        type: CREATE_TIMESHEET,
        payload: {
            ID,
            payPeriod
        }
    } 
}
