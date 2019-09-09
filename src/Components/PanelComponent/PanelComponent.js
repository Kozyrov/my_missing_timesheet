import React from 'react';
import './panelComponent.css';
import { TimeInput } from '../TimeInput/TimeInput';
import { TemplateEntries } from '../TemplateEntries/TemplateEntries';

const alternatingBackground = props => {
    if (props.dayIndex % 2 > 0){
        return 'time-entry-alternate';
    }
    return 'time-entry-container'
}

const PanelContainer = props => 
    <div className={alternatingBackground(props)}>
        <div className='date-container'>{props.day}</div>
        <TimeInput />
        <TemplateEntries /> 
    </div>

export default PanelContainer;