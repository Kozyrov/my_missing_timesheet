import React from 'react';
import './panelComponent.css';
import InputComponent from '../InputComponent/InputComponent';
import TemplateComponent from '../TemplateComponent/TemplateCompnent';

const alternatingBackground = props => {
    if (props.dayIndex % 2 > 0){
        return 'time-entry-alternate';
    }
    return 'time-entry-container'
}

const PanelContainer = props => 
    <div className={alternatingBackground(props)}>
        <div className='date-container'>{props.day}</div>
        <InputComponent />
        <TemplateComponent /> 
    </div>

export default PanelContainer;