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
        
    }
}

const AppContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;