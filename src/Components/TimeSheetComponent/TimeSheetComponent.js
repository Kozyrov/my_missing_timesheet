import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    const result = useSelector(state => state.result);
    const timesheet = null;
    const url = new URLSearchParams(window.location.search);

    useEffect(() => {
        initTimeSheet();
    })
    
    const initTimeSheet = () => {
        if (result === null) {
            const reqTimeSheetID = url.get('ID');
            if (reqTimeSheetID != null) {
                return props.loadTimeSheet(reqTimeSheetID);
            } else {
                console.log("no ID provided.");
                return null;
            }
        } else {

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