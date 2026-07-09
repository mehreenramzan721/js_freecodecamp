// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   return(userObj.hasOwnProperty("Alan") &&
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan"))  
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));



// // in and hasOwnProperty has same usage 
// "Alan" in users          // true
// users.hasOwnProperty("Alan")  // true 




// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(allUsers) {
//   // Only change code below this line
//   let count = 0;
//   for(const user in allUsers){
//     if(allUsers[user].online== true)
//     count++;

//   }
//   return count;
//   // Only change code above this line
// }

// console.log(countOnline(users));


// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   const arr =Object.keys(obj);
//   return arr;
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));

// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//  userObj.data.friends.push(friend);
//  return userObj.data.friends;
  
//   // Only change code above this line
// }

// console.log(addFriend(user, 'Pete'));