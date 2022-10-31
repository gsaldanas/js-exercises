const currentHour = 12;
const addHour = 24;
const newHour = (currentHour + addHour) % 24;
console.log("Het is nu: " + currentHour + " uur.");
console.log("over " + addHour + " uur is het " + newHour + " uur.");
