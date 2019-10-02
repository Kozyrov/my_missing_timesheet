import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerInput } from '../../Actions/ActionCreators';
import './templateComponent.css';

const TemplateComponent = props => {
    const input = useSelector(state => state.inputs[props.inputID]);
    const dispatch = useDispatch();

    const fullDayTemplate = () => {
        const templateIncrease = input.value + 8;
        if (templateIncrease > input.maxValue) {
            props.setErrorMessage(`Value must be equal to or less than ${input.maxValue}`)
        } else {
            dispatch(registerInput(input.ID, templateIncrease));
        }
    }
    return <div className="template-entry-btn" onClick={fullDayTemplate}>+8 Hrs</div>
}

export default TemplateComponent;
    