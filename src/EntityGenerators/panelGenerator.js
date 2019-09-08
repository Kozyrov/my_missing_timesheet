
const panelGenerator = (payPeriod) => {
    let panels = {};

    payPeriod.forEach(payday => {
        panels[`${payday.name}_${payday.date}`] = payday;
    });
    
    return panels;
}

export default panelGenerator;