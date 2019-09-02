// Graded Assignment 2: Scrabble Scorer

// Code your transform function here:
let keys = [];
function transform(oldScoreKey) {
  let temp;
  let newScoreKey = {};
  
  // let vals = [];
// this for loop gets the keys from oldScoreKey and puts them in the array keys
  for (key in oldScoreKey) {
    keys.push(key);
}
// this for loop gets the values from oldScoreKey and puts them in the array vals
// for (val in oldScoreKey) {
//     vals.push(oldScoreKey[val])
//   }
// let newScoreKey = keys.map(makeKey(oldScoreKey, keys))
  console.log(keys)
  console.log(makeKey(oldScoreKey, 3))
  
  for (let j = 0; j < keys.length; j++) {
    // newScoreKey = Object.defineProperty(oldScoreKey, vals[keys][j], {keys:key})
    temp = makeKey(oldScoreKey, keys[j]);
    
    return temp;
  }
  
  
  
// this for loop is where the magic happens DO NOT DELETE IT !!!!!!
  // for (let i = 0; i < vals[0].length; i++) {
  //   newScoreKey[vals[0][i]] = keyArray[0];
  // }
  

  return newScoreKey;
}

function makeKey(obj, key) { // takes argument of an object and one of its keys in the form of a number to convert
  let keyArray = [];
  let valArray = [];
  let convertedObj = {};
// get  a single key from object and put them in keyArray
  for (k in obj) {
    keyArray.push(k);
  }
// get values from object key and put them in valArray
  for (v in obj) {
    valArray.push(obj[v])
  }
// convert values to keys and the single key to  a value for each of the new keys
  for (let i = 0; i < valArray[key].length; i++) {
    convertedObj[valArray[key][i]] = keyArray[key];
  }
  return convertedObj;
}


// function convertSingleKey(obj) {
//   let letters = [];
//   let newObj = {};
//   // for (prop in obj) {
    
// // }
//   for (let i = 0; i < letters.length; i++) {
//     letters.push(obj[1][i])
//   }
//     console.log(letters)
//     console.log(newObj)
//   return newObj;
// }


// Code your initialPrompt function here:


// Code your runProgram function here:


// Here is the oldScoreKey object:
const oldScoreKey = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


console.log(transform(oldScoreKey))


// console.log(convertSingleKey(oldScoreKey))
// console.log(oldScoreKey[1])







// Use the transform function to create the newScoreKey object here:


// Create your scoringAlgorithms array here:


// Call the runProgram function here: