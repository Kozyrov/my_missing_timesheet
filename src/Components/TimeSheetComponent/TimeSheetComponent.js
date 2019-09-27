import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './timeSheetComponent.css';
import PanelContainer from '../../Containers/PanelContainer'; 

const TimeSheetComponent = (props) => {
    const result = useSelector(state => state.result);
    const dates = useSelector(state => state.dates);
    const url = new URLSearchParams(window.location.search);

    useEffect(() => {
        initResult();
    })

    const initResult = () => {
        if (result === null) {
            console.log('no result', result);
            const reqTimeSheetID = url.get('ID');
            if (reqTimeSheetID != null) {
                return props.loadTimeSheet(reqTimeSheetID);
            } else {
                console.log("no ID provided.");
                return null;
            }
        } else {
            console.log('there is a result', result);
            console.log('there are workdays:', dates);
            useDispatch() // TODO - figure out how to hook into dispatch.
        }
    }

    const mapTimeSheetDays = () => {
        let panels = {};
        if (dates) {
            // add a key of string payday object key name's first two characters + key date
            dates.forEach((payday,index) => {
                const concatKey = `${payday.name.slice(0, 2)}_${payday.date}`;
                 //create object containing necessary relationships and data.
                panels[concatKey] = {
                    ID: concatKey,
                    date: index,
                    input: {},
                    templates: [
                        'fullday',
                        'halfday'
                    ]
                }; 
            });
        }
        return panels;
    }

    return (
        <div className = 'time-sheet-container'>
            standby
        </div>
    )
}
    

export default TimeSheetComponent;