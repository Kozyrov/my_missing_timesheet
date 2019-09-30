import React from 'react';
import { useSelector } from 'react-redux';

const ErrorOverlay = props => {
    const status = useSelector((state) => state.panels[props.panelID].hasError)

    return <div>Error!</div>
}

export default ErrorOverlay;