// Graded Assignment 2: Scrabble Scorer

const input = require('readline-sync');

// Code your transform function here:
let newScoreKey = {};
function transform(oldScoreKey) {
  // let keys = [];
  // let vals = [];
  // for (let key in oldScoreKey) {
  //   keys.push(key);
  // }
  // for (let val in oldScoreKey) {
  //   vals.push(oldScoreKey[val])
  // }

  let keys = Object.keys(oldScoreKey);
  let vals = Object.values(oldScoreKey);
  for (let i = 0; i < vals.length; i++) {
    for (let j = 0; j < vals[i].length; j++) {
      newScoreKey[vals[i][j].toLowerCase()] = keys[i];
    }
  }
  // newScoreKey[' '] = '0';
  return newScoreKey;
}

// Code your initialPrompt function here:

function initialPrompt() {
  let choice;
  let options = [0, 1, 2];
  // while (options.indexOf(choice) === -1) { // Repeats until a valid choice is made.
  choice = Number(input.question(`   
Welcome to the Scrabble score calculator. Enter 'stop' to quit.

Which scoring algorithm would you like to use?

0 - ${scoringAlgorithms[0].name}:        ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}:    ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}:    ${scoringAlgorithms[2].description}
Enter 0,1,2:`));
  // }
  return choice;
}

// Code your runProgram function here:
function runProgram(arr) {
  let choice = initialPrompt();
  let word;
  let algoMsg = `Using algorithm:`;
  if (choice === 1) {
    console.log(`${algoMsg} ${arr[1].name}
    `);
  } else if (choice === 2) {
    console.log(`${algoMsg} ${arr[2].name}
    `);
  } else {
    console.log(`${algoMsg} ${arr[0].name}
    `);
  }

  while (word !== 'stop'.toLowerCase()) {
    let method;
    let word = input.question(`Enter a word to be scored: `);
    // word = prompt(`Enter a word to be scored: `);
    if (word === 'stop') {
      return 'Program stopped';
    }
    if (choice === 1) {
      method = arr[1].scoreFunction(word);
    } else if (choice === 2) {
      method = arr[2].scoreFunction(word);
    } else {
      method = arr[0].scoreFunction(word);
    }

    let message = `Score for '${word}': ${method}
      `;
    console.log(message);
  }
  return runProgram(arr);
}

// Here is the oldScoreKey object:
const oldScoreKey = {
  // 0: [' '],
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

// Use the transform function to create the newScoreKey object here:

transform(oldScoreKey);

// Create your scoringAlgorithms array here:
let scoringAlgorithms = [
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoreFunction: function (word) {
      let score = 0;
      let letters = word.toLowerCase().split('');
      for (let i = 0; i < letters.length; i++) {
        for (let key in newScoreKey) {
          if (letters[i] === key) {
            score += Number(newScoreKey[key]);
          }
        }
      }
      return score;
    }
  },
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoreFunction: function (word) {
      let score = 0;
      let letters = word.toLowerCase().split('');
      for (let letter in letters) {
        score += 1;
      }
      letters.forEach(function (char) {
        if (char === ' ') {
          score -= 1;
        }
      });
      return score;
    }
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 points, consonants are 1 point.',
    scoreFunction: function (word) {
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let score = 0;
      let letters = word.toLowerCase().split('');
      for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i])) {
          score += 3;
        } else {
          score += 1;
        }
      }
      letters.forEach(function (char) {
        if (char === ' ') {
          score -= 1;
        }
      });
      return score;
    }
  }
];

// Call the runProgram function here:
// console.log(transform(oldScoreKey))
console.log(runProgram(scoringAlgorithms));
