function checkYear(year) {
  let message = "";
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        message += year + " is een schrikkel jaar!";
      } else {
        message += year + " is geen schrikkel jaar!";
      }
    } else {
      message += year + " is een schrikkeljaar";
    }
  } else {
    message += year + " is geen schrikkeljaar";
  }
  return message;
}

//refactor
function checkYearRefactor(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
  ) {
    return year + " is een schrikkeljaar";
  } else {
    return year + " is geen schrikkeljaar";
  }
}

console.log(checkYearRefactor(1996));
console.log(checkYearRefactor(1997));
console.log(checkYearRefactor(1900));
console.log(checkYearRefactor(2000));
console.log(checkYearRefactor(2020));
