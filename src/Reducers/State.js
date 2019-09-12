const initialState = {
    result: null, // normally an id corresponding to the currently viewed timesheet.
    entities:{
        timesheets: {},
        panels: {},
        dates: [],
        inputs: {},
    },
    templates: {
        fullDay: {
            enabled: true,
            selected: false,
            hours: 8
        },
        halfday: {
            enabled: true,
            selected: false,
            hours: 4
        }
    }
}
export default initialState;