import React, { useState } from 'react';
import './timeSheetComponent.css';
import PanelContainer from '../../Containers/PanelContainer'; 
import { statement } from '@babel/template';

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
        const mockResult = '90034';
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