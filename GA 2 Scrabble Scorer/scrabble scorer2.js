// Graded Assignment 2: Scrabble Scorer

// Code your transform function here:
let newScoreKey = {};
function transform(oldScoreKey) {
  
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
    Scoring Methods:
    ${scoringAlgorithms[0].name}:            ${scoringAlgorithms[0].description}
    ${scoringAlgorithms[1].name}:     ${scoringAlgorithms[1].description}
    ${scoringAlgorithms[2].name}:    ${scoringAlgorithms[2].description}
    Please enter your method:`).toLocaleLowerCase();
    }
  return choice;
}

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

// Use the transform function to create the newScoreKey object here:

transform(oldScoreKey)

// Create your scoringAlgorithms array here:
let scoringAlgorithms = [
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoreFunction: function(word) {
      let score = 0;
      let letters = word.toLowerCase().split('');
      for (let i = 0; i < letters.length; i++) {
        for (key in newScoreKey) {
          if (letters[i] === key) {
            score += Number(newScoreKey[key][0]);
          }
        }
      }
      return score;
    }
  },
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoreFunction: function(word) {
      let score = 0;
      let letters = word.toLowerCase().split('');
      for (letter in letters) {
        score += 1
      }
      return score;
    }
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 points, consonants are 1 point.',
    scoreFunction: function(word) {
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let score = 0;
      let letters = word.toLowerCase().split('');
      for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i])) {
          score += 3
        } else {
          score += 1;
        }
      }
        return score;
    }
  }
]

console.log(scoringAlgorithms[2].scoreFunction('JavaScript'))
console.log(scoringAlgorithms[1].scoreFunction('JavaScript'))
console.log(scoringAlgorithms[0].scoreFunction('JavaScript'))
// console.log(initialPrompt())

// Call the runProgram function here:













// const input = require('readline-sync');
  // let choice = input.question(
  //   `WELCOME TO SCRABBLE SCORER
  //   Scoring Methods:
  //   Scrabble:     Letters have traditional point values
  //   Simple Score: Each Letter is worth 1 point
  //   Bonus Vowels: Vowels are 3 points, consonants are 1 point
  //   Please enter your method:`);