const datesGenerator = (workdays) => {
    const dates = [];

    workdays.forEach((workday) => {
        dates.push({
            value: workday.date,
            day: workday.name
        })
    })
    return dates;
}

export default datesGenerator;