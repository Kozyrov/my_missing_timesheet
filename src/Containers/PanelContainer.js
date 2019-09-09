import { connect } from 'react-redux';
import PanelComponent from '../Components/PanelComponent/PanelComponent';

const mapStateToProps = state => {
    return {
        timesheets: state.entities.panels
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const PanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelComponent)

export default PanelContainer;