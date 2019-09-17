import { connect } from 'react-redux';
import TimeSheetComponent from '../Components/TimeSheetComponent/TimeSheetComponent';
import { requestTimeSheet } from '../Actions/ActionCreators';

const mapStateToProps = state => {
    return {
        timesheets: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTimeSheet: result => {
            dispatch(requestTimeSheet(result));
        }
    }
}

const TimeSheetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSheetComponent)

export default TimeSheetContainer;