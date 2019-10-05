// Class 06 Exercises: More Functions (Part 1)

// Code your anonymous function here:

let practice = function (input) {
  if (typeof input === 'number') {
    return input * 3;
  } else if (typeof input === "string") {
    return `ARRR!`;
  } 
  return input;
};

// console.log(practice(3));
// console.log(practice('pirate'));
// console.log(practice(''));
// console.log(practice(true));

// Complete the map method here:
let arr = ['Elocution', 21, 'Clean teeth', 100, '', true];

let newArr = arr.map(practice);

console.log(newArr);