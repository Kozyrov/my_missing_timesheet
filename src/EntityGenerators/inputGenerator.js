import { registerInput } from '../Actions/ActionCreators';
export default inputGenerator = (payPeriod) => {
    const uuidv1 = require('uuid/v1');
    let inputs = {};

    payPeriod.forEach((payday, index) => {
        const inputID = uuidv1();
        
        inputs[inputID] = {
            ID: inputID,
            selected: false,
            maxValue: 24,
            minValue: 0,
            value: null
        }

        registerInput(inputID); // register the inputID with the parent component
    })
    return inputs;
}