import React from 'react';
import { useDispatch } from 'react-redux';
import { selectInput, registerInput } from '../../Actions/ActionCreators';
import './inputComponent.css';

const InputComponent = props => {
    const dispatch = useDispatch();
    const handleInput = (event) => {
        dispatch(registerInput(props.input.ID, event.target.value));
    }
    
    return <input
            type='number'
            placeholder='#'
            className='time-input'
            maxLength='2'
            min={props.input.minValue}
            max={props.input.maxValue}
            value={props.input.value}
            onClick={() => dispatch(selectInput(props.input.ID))}
            onChange={handleInput}>
            </input>;
} 

export default InputComponent;