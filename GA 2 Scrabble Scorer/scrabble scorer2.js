// Graded Assignment 2: Scrabble Scorer

// Code your transform function here:

function transform(oldScoreKey) {
  let newScoreKey = {};
  // let keys = [];
  // let vals = [];

  // for (key in oldScoreKey) {
  //   keys.push(key);
  // }
  // for (val in oldScoreKey) {
  //   vals.push(oldScoreKey[val])
  // }

  let keys = Object.keys(oldScoreKey);
  let vals = Object.values(oldScoreKey);
  for (let i = 0; i < vals.length; i++) {
    for (let j = 0; j < vals[i].length; j++) {
      newScoreKey[vals[i][j].toLowerCase()] = keys[i];
    }
  }
  return newScoreKey;
}

// Code your initialPrompt function here:

function initialPrompt() {
  let choice; 
  let options = ['scrabble', 'simple score', 'bonus vowels']
    while (options.indexOf(choice) === -1) {
      choice = prompt(
    `WELCOME TO SCRABBLE SCORER
    Scoring Methods:s
    Scrabble:     Letters have traditional point values
    Simple Score: Each Letter is worth 1 point
    Bonus Vowels: Vowels are 3 points, consonants are 1 point
    Please enter your method:`).toLocaleLowerCase();
    }
  return choice;
}
// console.log(initialPrompt())





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

// console.log(transform(oldScoreKey))









// Use the transform function to create the newScoreKey object here:


// Create your scoringAlgorithms array here:


// Call the runProgram function here:














// const input = require('readline-sync');
  // let choice = input.question(
  //   `WELCOME TO SCRABBLE SCORER
  //   Scoring Methods:
  //   Scrabble:     Letters have traditional point values
  //   Simple Score: Each Letter is worth 1 point
  //   Bonus Vowels: Vowels are 3 points, consonants are 1 point
  //   Please enter your method:`);