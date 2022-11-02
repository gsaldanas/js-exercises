const lottoNumber = "2,10,11,7,30,45";
const myArr = lottoNumber.split(",");
console.log(myArr);
const newArr = [];
myArr.forEach(function (el) {
  if (el < 10) {
    newArr.push(0 + el);
  } else {
    newArr.push(el);
  }
});
const finalArr = newArr.join().replaceAll(",", "|");
console.log(newArr);
console.log(finalArr);
