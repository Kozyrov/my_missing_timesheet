import React from 'react';
import { useSelector } from 'react-redux';
import './panelComponent.css';
import InputComponent from '../InputComponent/InputComponent';
import TemplateComponent from '../TemplateComponent/TemplateCompnent';

const PanelContainer = props => {
    const dates = useSelector(state => state.dates);
    const datesIndex = props.panel.datesIndex;
    const payday = dates[datesIndex];

    const alternatingBackground = () => {
        if (datesIndex % 2 > 0){
            return 'time-entry-alternate';
        }
        return 'time-entry-container'
    }

    const populatePanel = () => {
        if(dates.length > 0) {
            return (
                <div className={alternatingBackground()}>
                    <div className='date-container'>
                        <p>{payday.name}</p>
                        <p>{payday.value}</p>
                    </div>
                    <InputComponent inputID={props.panel.input}/>
                    <TemplateComponent templates={props.panel.templates} /> 
                </div>
            )
        } else {
            return <div>no payday to display</div>
        }
    }
    return populatePanel();
}

export default PanelContainer;