export const initialState = {
    results:[],
    entities:{
        'timesheets': {},
        'panels': {},
        'dates': {},
        'inputs': {},
        'templates': {
            'fullDay': {
                enabled: true,
                selected: false,
                hours: 8
            },
            'halfday': {
                enabled: true,
                selected: false,
                hours: 4
            }
        }
    }
}