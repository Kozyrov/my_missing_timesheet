import { React, Component } from 'react';
import './timeInput.css';
import { emptyStatement } from '@babel/types';

export class TimeInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: null
        }
    }

    validateInput = (event) => {
        console.log(event);
    }

    render() {
        return <input type='number'placeholder='#' className='time-input' onChange={this.validateInput}></input>;
    }
}  