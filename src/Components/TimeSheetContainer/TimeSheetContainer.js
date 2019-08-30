import React from 'react';
import './timeSheetContainer.css';
import { TimeEntryContainer } from '../TimeEntryContainer/TimeEntryContainer';

const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

export const TimeSheetContainer = (props) =>
    <div className='time-sheet-container'>
        {daysOfTheWeek.map(
            (item, key) => <TimeEntryContainer item={item} key={item + Math.random()} />
        )}
    </div>

