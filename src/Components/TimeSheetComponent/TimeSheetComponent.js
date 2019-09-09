import React from 'react';
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
    console.log(props);
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