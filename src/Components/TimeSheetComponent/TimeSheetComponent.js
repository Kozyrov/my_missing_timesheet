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
    const [result] = useState(props.timesheets.result);

    if (result === null) {
        const mockResult = '00000';
        props.loadTimeSheet(mockResult);
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