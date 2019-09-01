// Class 7 Exercises: Objects and Math

// Code your crewReports function here:
function crewReports(animal) {
  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

// Code your fitnessTest function here:
let turns = [];
function fitnessTest(arr) {
  function countSteps(crewMember) {
  let steps = 0;
  let turnsToReach20 = 0;
  let step = 0;
  while (steps < 20) {
    step = crewMember.move();
    // console.log(step)
    steps += step;
    turnsToReach20 += 1;
  }
  return turnsToReach20;
}

  for (let i = 0; i < arr.length; i++) {
    turns.push(countSteps(arr[i]));
  }
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(`${arr[i].name} took ${turns[i]} turns to take 20 steps.`);
  }
  
  // console.log(turns)
  return results.join('\n');
}

// Code your objects and crew array here:

let superChimpOne = {
  astronautID: 1,
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  move: function () {
    return Math.floor(Math.random() * 11);
  }
};

let salamander = {
  astronautID: 2,
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  }
};

let chimp3 = {
  astronautID: 3,
  name: 'Brad',
  species: 'Chimpanzee',
  mass: 11,
  age: 6,
  move: function () {
    return Math.floor(Math.random() * 11);
  }
};

let dog = {
  astronautID: 6,
  name: 'Leroy',
  species: 'Beagle',
  mass: 14,
  age: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  }
};

let waterBear = {
  astronautID: 8,
  name: 'Almina',
  species: 'Tardigrade',
  mass: 0.0000000001,
  age: 1,
  move: function () {
    return Math.floor(Math.random() * 11);
  }
};

let crew = [superChimpOne, salamander, chimp3, dog, waterBear];

console.log(fitnessTest(crew))
// console.log(crew[0].move())
// console.log(countSteps(crew[0]))