const fruits = [
  {
    name: "apple",
    id: 1,
  },
  {
    name: "banana",
    id: 2,
  },
  {
    name: "mango",
    id: 3,
  },
  {
    name: "kiwi",
    id: 98,
  },
  {
    name: "Strawberry",
    id: 4,
  },
];

// fruits.forEach((element) => {
//   console.log(element);
// });

// function findIndexById(arr, id) {
//   let index;
//   //for Each
//   arr.forEach((el, idx) => {
//     console.log(idx);
//     if (id == el.id) {
//       console.log("index of " + el.name + " is: " + idx);
//       index = idx;
//     }
//     // console.log("object");
//     // console.log(el);
//     // console.log(idx);
//   });
//   return index;
// }
function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      return i;
    }
  }
}
function deleteItemById(arr, id) {
  let index = findIndex(arr, id);
  console.log(index);
  arr.splice(index, 1);
}

const allId = fruits.reduce(function (acc, e) {
  return acc + e.id;
}, 0);

console.log(fruits);
console.log(findIndex(fruits, 98));
deleteItemById(fruits, 98);
deleteItemById(fruits, 3);
console.log(fruits);
console.log("the toal id is " + allId);
// function deleteItem(arr, element) {
//   let id = element.id;

//   let index = arr.indexOf(element);
//   console.log(index);
//   return arr.splice(index, 1);
// }

// console.log(fruits);
// console.log(
//   deleteItem(fruits, {
//     name: "Strawberry",
//     id: 3,
//   })
// );
// console.log(fruits);
