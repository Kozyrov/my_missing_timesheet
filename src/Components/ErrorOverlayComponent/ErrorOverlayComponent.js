import React from 'react';
import { useSelector } from 'react-redux';
import './errorOverlayComponent.css';

const ErrorOverlay = props => {
    const status = useSelector((state) => state.panels[props.panelID].hasError)

    const renderError = () => {
        if(!status) {
            return <span className="error-overlay">TESTTESTTEST{props.errorMessage}</span>
        } else {
            return null;
        }
    }
    return renderError();
}

export default ErrorOverlay;