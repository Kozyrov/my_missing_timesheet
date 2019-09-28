const inputGenerator = (payPeriod) => {
    let inputs = {};

    payPeriod.forEach((payday, index) => {
        
        inputs[index] = {
            panelIndex: index,
            maxValue: 24,
            minValue: 0,
            value: payday.value
        }
    })
    return inputs
}

export default inputGenerator;