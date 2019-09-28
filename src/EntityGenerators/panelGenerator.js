const panelGenerator = (payPeriod) => {
    let panels = {};

    payPeriod.forEach((payday, index) => {
        const concatKey = `${payday.name.slice(0, 2)}_${payday.date}`;
        // add a key of string payday object key name + key date
        panels[concatKey] = { //create object containing necessary relationships and data.
            ID: concatKey,
            datesIndex: index, // index of the payday in payPeriod Array
            input: index,
            templates: [
                'fullday',
                'halfday'
            ]
        }; 
    });
    
    return panels;
}

export default panelGenerator;