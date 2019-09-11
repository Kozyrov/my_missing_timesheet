import { connect } from 'react-redux';
import InputComponent from '../App';

const mapStateToProps = state => {
    return {
        result: state
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const AppContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer;