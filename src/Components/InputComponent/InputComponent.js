import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerInput } from '../../Actions/ActionCreators';
import './inputComponent.css';

const InputComponent = props => {
    const dispatch = useDispatch();
    const inputsState = useSelector(state => state.inputs);
    const input = inputsState[props.input];

    // const handleInput = (event) => {
    //     console.log(event);
    // }
    
    return <input
            type='number'
            placeholder='#'
            className='time-input'
            maxLength='2'
            min={input.minValue}
            max={input.maxValue}
            value={input.value}
            onChange={(event) => console.log(event)}>
            </input>;
} 

export default InputComponent;