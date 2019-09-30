const inputGenerator = (payPeriod) => {
    let inputs = {};

    payPeriod.forEach((payday, index) => {
        const concatID = `${payday.name.slice(0, 2)}_${payday.date}_${index}`

        inputs[concatID] = {
            ID: concatID,
            panelID: `${payday.name.slice(0, 2)}_${payday.date}`,
            maxValue: 24,
            minValue: 0,
            value: payday.value
        }
    })
    return inputs
}

export default inputGenerator;