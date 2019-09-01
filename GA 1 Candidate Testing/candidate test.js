// Graded Assignment 1: Candidate Testing
// To use in Repl.it, uncomment the two input lines and comment out the two prompt lines.

// const input = require('readline-sync');

let candidate = prompt('Enter your first and last name: ');
// let candidate = input.question('Enter your first and last name: ');
let firstName = candidate.charAt(0).toUpperCase() + candidate.slice(1, candidate.indexOf(' '));
let lastName = candidate.charAt(candidate.indexOf(' ') + 1).toUpperCase() + candidate.slice(candidate.indexOf(' ') + 2);
let name = `${firstName} ${lastName}`;
console.log(`
Candidate Name: ${name}`);

let questions = [
  '1) True or false: 5000 meters = 5 kilometers.',
  '2) (5 + 3)/2 * 10 = ?',
  '3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
  '4) Who was the first American woman in space?',
  '5) What is the minimum crew size for the International Space Station (ISS)?'
];
let responses = ['', '', '', '', ''];
let answers = ['true', '40', 'trajectory', 'sally ride', '3'];
let correct = 0;

for (let i = 0; i < questions.length; i++) {

  responses[i] = prompt(questions[i]).toLowerCase();
  // responses[i] = input.question(questions[i]).toLowerCase();
  console.log(`Your Answer: ${responses[i]}`);
  console.log(`Correct Answer: ${answers[i]}
  `);
  if (responses[i] === answers[i]) {
    correct += 1;
  }
}

let score = correct / questions.length * 100;

console.log(`>>> Overall Grade: ${score}% (${correct} of ${questions.length} responses correct) <<<`);

let status = '';

if (score < 80) {
  status = 'FAILED';
} else {
  status = 'PASSED';
}

console.log(`>>> Status: ${status} <<<`);