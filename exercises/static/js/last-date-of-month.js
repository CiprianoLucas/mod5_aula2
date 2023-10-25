const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

alert(getLastDateOfMonth(2023,2))