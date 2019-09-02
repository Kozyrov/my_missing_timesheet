import React from 'react';
import './timeEntryContainer.css';
import { TimeInput } from '../TimeInput/TimeInput';
import { TemplateEntries } from '../TemplateEntries/TemplateEntries';

function alternatingBackground(props) {
    if (props.dayIndex % 2 > 0){
        return 'time-entry-alternate';
    }
    return 'time-entry-container'
}

export const TimeEntryContainer = props => 
    <div className={alternatingBackground(props)}>
        <div className='date-container'>{props.day}</div>
        <TimeInput />
        <TemplateEntries /> 
    </div>
