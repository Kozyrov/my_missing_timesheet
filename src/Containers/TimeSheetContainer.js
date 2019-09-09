import { connect } from 'react-redux';
import { newTimesheet } from '../Actions/ActionCreators';
import TimeSheetComponent from '../Components/TimeSheetComponent/TimeSheetComponent';

const mapStateToProps = state => {
    return {
        timesheets: state.entities.timesheets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        generateNewTimesheet: payPeriod => {
            dispatch(newTimesheet(payPeriod));
        }
    }
}

const TimeSheetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSheetComponent)

export default TimeSheetContainer;