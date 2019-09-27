import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestTimeSheet } from '../../Actions/ActionCreators';
import './timeSheetComponent.css';
import PanelContainer from '../../Containers/PanelContainer'; 

const TimeSheetComponent = () => {
    const result = useSelector(state => state.result); // TODO: move this to the App component
    const panels = useSelector(state => state.panels);
    const url = new URLSearchParams(window.location.search);    
    const dispatch = useDispatch();

    useEffect(() => {
        initResult();
    })

    const initResult = () => {
        if (result === null) {
            console.log('no result', result);
            const reqTimeSheetID = url.get('ID');
            if (reqTimeSheetID != null) {
                dispatch(requestTimeSheet(reqTimeSheetID));
            } else {
                console.log("no ID provided.");
            }
        }
    }

    const generatePanels = () => {
        if (Object.entries(panels).length === 0 && panels.constructor === Object) {
            return <div className='time-sheet-container'>nothing to see here</div>
        } else {
            return (
                <div className='time-sheet-container'>
                    {Object.entries(panels).map(
                        ([ID, panel]) =>
                        <PanelContainer panel={panel} key={ID} />  
                    )}
                </div>
            )
        }
    }
    return generatePanels();
}
    

export default TimeSheetComponent;