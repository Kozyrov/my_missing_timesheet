import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerInput } from '../../Actions/ActionCreators';
import './templateComponent.css';

const TemplateComponent = props => {
    const input = useSelector(state => state.inputs[props.inputID]);
    const dispatch = useDispatch();

    const fullDayTemplate = () => {
        const template = 8;
        if (input.value + template > input.maxValue) {
            props.setErrorMessage(`Value must be equal to or less than ${input.maxValue}`)
        } else {
            dispatch(registerInput(input.ID, template));
        }
    }
}

export default TemplateComponent;
    