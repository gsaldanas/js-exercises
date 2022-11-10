let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let salaries = {
  john: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
console.log(menu);
