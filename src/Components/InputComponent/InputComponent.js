import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerInput } from '../../Actions/ActionCreators';
import './inputComponent.css';

const InputComponent = props => {
    const input = useSelector(state => state.inputs[props.input]);
    const dispatch = useDispatch();

    const handleInput = (event) => {
        let entry = event.target;
        if (entry.reportValidity()) {
            dispatch(registerInput(input.ID, entry.value));
        } else {
            props.toggleError(true);
            props.setErrorMessage(entry.validationMessage);
        }
    }
    
    
    return <input
            type='number'
            placeholder='#'
            className='time-input'
            maxLength='2'
            min={input.minValue}
            max={input.maxValue}
            value={input.value}
            onChange={(event) => handleInput(event)}>
            </input>;
} 

export default InputComponent;