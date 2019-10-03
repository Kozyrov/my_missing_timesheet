import {
    fetchTimeSheet
} from '../Actions/ActionCreators';
import {
    FETCH_TIMESHEET
} from '../Actions/ActionTypes';

describe('actions', () => {
    it('should create an action that indicates the app is fetching a timesheet', () => {
        const expectedAction = {
            type: FETCH_TIMESHEET,
            payload: {}
        }
        expect(fetchTimeSheet()).toEqual(expectedAction);
    })
})