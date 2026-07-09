// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };

// // Only change code below this line
// userActivity.data.online = 45
// // Only change code above this line

// console.log(userActivity);


// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   scannedItem = foods[scannedItem]  ;
//   return scannedItem;
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// Only change code above this line

console.log(foods);