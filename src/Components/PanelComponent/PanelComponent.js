import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './panelComponent.css';
import ErrorOverlay from '../ErrorOverlayComponent/ErrorOverlayComponent';
import InputComponent from '../InputComponent/InputComponent';
import TemplateComponent from '../TemplateComponent/TemplateComponent';
import { registerPanel } from '../../Actions/ActionCreators';

const PanelContainer = props => {
    const dates = useSelector(state => state.dates);
    const result = useSelector(state => state.result);
    const panels = useSelector(state => state.timesheets[result].panels);
    const dispatch = useDispatch();
    const [ errorMessage, setErrorMessage ] = useState(null);

    const hasError = errorMessage ? true : false;

    const datesIndex = props.panel.datesIndex;
    const payday = dates[datesIndex];

    useEffect(() => {
        initPanel();
    })

    const initPanel = () => {
        // checks to see if the panel has been registered. Important to prevent infinite re-rendering.
        if(!panels.includes(props.panel.ID)) {
            dispatch(registerPanel(props.panel.ID, result));
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
                    <ErrorOverlay panelID={props.panel.ID} toggle={hasError} message={errorMessage} />
                    <InputComponent input={props.panel.input} setErrorMessage={setErrorMessage} />
                    <TemplateComponent inputID={props.panel.input} setErrorMessage={setErrorMessage} /> 
                </div>
            )
        } else {
            return <div>no payday to display</div>
        }
    }
    return populatePanel();
}

export default PanelContainer;