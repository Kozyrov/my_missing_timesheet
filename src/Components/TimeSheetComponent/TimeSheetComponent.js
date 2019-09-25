import React, { useState } from 'react';
import './timeSheetComponent.css';
import PanelContainer from '../../Containers/PanelContainer'; 

const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const TimeSheetComponent = (props) => {
    const url = new URLSearchParams(window.location.search);
    const [result] = useState(props.timesheets.result);

    if (result === null) {
        const reqTimeSheetID = url.get('ID');
        if (reqTimeSheetID != null) {
            props.loadTimeSheet(reqTimeSheetID);
        } else {
            console.log("no ID provided.");
        }
    }

    return (
        <div className='time-sheet-container'>
            {daysOfTheWeek.map(
                (day, key) =>
                <PanelContainer day={day} dayIndex={key} key={key} />  
            )}
        </div>
    )
}
    

export default TimeSheetComponent;