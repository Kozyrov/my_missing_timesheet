const inputGenerator = (payPeriod) => {
    const uuidv1 = require('uuid/v1');
    let inputs = {};

    payPeriod.forEach(() => {
        const inputID = uuidv1();
        
        inputs[inputID] = {
            ID: inputID,
            selected: false,
            maxValue: 24,
            minValue: 0,
            value: 21
        }
    })
    return inputs
}

export default inputGenerator;