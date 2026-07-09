// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));


// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence=["learning",...fragment,"is","fun"]; // Change this line
//   return sentence;
// }

// console.log(spreadOut());


// function quickCheck(arr, elem) {
//   // Only change code below this line
//   return arr.indexOf(elem) != -1
//   // Only change code above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i].indexOf(elem) === -1) {
//         newArr.push(arr[i]);
//       }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


let myNestedArray = [
  // Only change code below this line
    ['loop', 
      ['deep', 
        ['deeper', 
          ['deepest'
          ]
        ]
      ]
    ]
  
  // Only change code above this line
];