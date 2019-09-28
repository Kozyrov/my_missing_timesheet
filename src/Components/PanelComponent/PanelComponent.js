import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './panelComponent.css';
import InputComponent from '../InputComponent/InputComponent';
import TemplateComponent from '../TemplateComponent/TemplateCompnent';
import { registerPanel } from '../../Actions/ActionCreators';

const PanelContainer = props => {
    const dates = useSelector(state => state.dates);
    const dispatch = useDispatch();
    const datesIndex = props.panel.datesIndex;
    const payday = dates[datesIndex];

    useEffect(() => {
        initPanel();
    })

    const initPanel = () => {
        if(props.panel.ID) {
            dispatch(registerPanel(props.panel.ID, props.panel.input.ID));
        }

    }

    const alternatingBackground = () => {
        if (datesIndex % 2 > 0){
            return 'time-entry-alternate';
        }
        return 'time-entry-container';
    }

    const populatePanel = () => {
        if(dates.length > 0) {
            return (
                <div className={alternatingBackground()}>
                    <div className='date-container'>
                        <p>{payday.day}</p>
                        <p>{payday.value}</p>
                    </div>
                    <InputComponent input={props.panel.input}/>
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