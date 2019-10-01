import React from 'react';
import './errorOverlayComponent.css';

const ErrorOverlay = props => {
    const overlayID = `error_${props.panelID}`;

    const renderError = () => {
        if(props.toggle) {
            setTimeout(() => document.getElementById(overlayID).style.display = 'none', 2600);
            return <span id={overlayID} className="error-overlay">{props.message}</span>
        } else {
            return null;
        }
    }
    return renderError();
}

export default ErrorOverlay;