import { connect } from 'react-redux';
import { requestTimeSheet } from '../Actions/ActionCreators';
import App from '../App';

const mapStateToProps = state => {
    return {
        result: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTimeSheet: result => {
            dispatch(requestTimeSheet(result));
        }
    }
}

const AppContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;