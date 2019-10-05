//  Class 05 Studio: Functions are at your beck and call

// 10.11.1 Reverse Characters

// function reverseCharacters(stringToReverse) {
//   reversedString = stringToReverse.split('').reverse().join('');
//   return reversedString;
// }
// let reversedString;
// console.log(reverseCharacters('I love the smell of code in the morning.'));

// 10.11.2 Reverse Digits

function reverseCharacters(stringToReverse) {
  if (typeof stringToReverse === 'number') {
    stringToReverse = stringToReverse.toString();
    reversedString = stringToReverse.split('').reverse().join('');
    reversedString = Number(reversedString);
  } else {
     reversedString = stringToReverse.split('').reverse().join('');
  }
  return reversedString;
}
console.log(reverseCharacters('Capitalized Letters'));
console.log(reverseCharacters(456789));

//  10.11.3 Complete Reversal

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

function completeReversal(arrToReverse) {
  newArr = [];
  for (let i = 0; i < arrToReverse.length; i++) {
    newArr.push(reverseCharacters(arrToReverse[i]));
  }
  newArr.reverse();
  return newArr;
}
console.log(completeReversal(['LC101', 567, 'Taco cat', 1234]));













