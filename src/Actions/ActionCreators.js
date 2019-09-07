import { mockWeeklyPayPeriod } from '../Reducers/mockData';

import { uuiv1 } from 'uuiv/v1';
import { CREATE_TIMESHEET, CREATE_PANELS } from './ActionTypes';

export function createTimesheet() {
    const ID = uuiv1(); // create a timestamp generated uuid
    const payPeriod = mockWeeklyPayPeriod.workdays; // would be an async http call to service in live app
    return {
        type: CREATE_TIMESHEET,
        payload: {
            ID,
            panels: createPanels(payPeriod)
        }
    } 
}

export function createPanels(payPeriod) {
    return {
        type: CREATE_PANELS,
        payload: {
            panels: payPeriod.map(payday => {
                const panelID = uuiv1();
                
                return {
                    [panelID]: {
                    'id': panelID, 
                    'date': payday, 
                    'input': , //referencing inputs entity of id '1' 
        
                    templates: ['1', '2'] //referencing templates entities of ids '1' & '2' 
                    }
                }
            })
        }
    }
}