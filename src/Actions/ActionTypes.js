export const SET_CURRENT_TIMESHEET = 'SET_CURRENT_TIMESHEET'; // the currently viewed timesheet
export const CREATE_TIMESHEET = 'CREATE_TIMESHEET'; // a user can start a new timesheet if there is not one set for the current pay period.
export const CREATE_PANELS = 'CREATE_PANELS'; // the number of panels on the timesheet is determined by the number of days in the pay period.
export const ASSIGN_PAY_PERIOD = 'ASSIGN_PAY_PERIOD'; // a date is assigned to each panel
export const CREATE_INPUT = 'CREATE_INPUT'; // an input field is associated with each panel
export const REGISTER_INPUT = ' REGISTER_INPUT';
export const SELECT_INPUT = 'SELECT_INPUT'; // user selects which input to enter their hours into
export const ENTER_TIME = 'ENTER_TIME'; // user enters the amount of time they worked
export const SELECT_TEMPLATE = 'SELECT_TEMPLATE'; // user picks a template to quickly enter time