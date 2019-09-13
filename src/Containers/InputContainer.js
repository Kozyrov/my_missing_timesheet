import { connect } from 'react-redux';
import InputComponent from '../Components/InputComponent/InputComponent';

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
)(InputComponent);

export default AppContainer;