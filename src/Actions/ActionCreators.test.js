import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {
    fetchTimeSheet
} from '../Actions/ActionCreators';
import {
    FETCH_TIMESHEET
} from '../Actions/ActionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should create an action that indicates the app is fetching a timesheet', () => {
        const expectedAction = {
            type: FETCH_TIMESHEET,
            payload: {}
        }
        expect(fetchTimeSheet()).toEqual(expectedAction);
    })
})

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('creates FETCH_TIMESHEET with status of \'error\' on error'), () => {
        fetchMock.getOnce('/?ID=00000', ), {
            
        }
    }
})