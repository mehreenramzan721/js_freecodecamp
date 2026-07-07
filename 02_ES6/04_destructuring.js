const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
// const {today, tomorrow} = HIGH_TEMPERATURES;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Only change code above this line

var a = 8, b = 6;
// Only change code below this line
[a,b]=[b,a]// swapped using destructuring

// via rest operator
function removeFirstTwo(list) {
  const [a,b,...arr]=list
  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
// now we will get first two element removed from the array and the answer will be the remainings