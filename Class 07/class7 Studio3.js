// Class 7 Studio 3: Objects & Math (Bonus Mission)

// 12.8.4.2 Fuel Required for Launch

// Code your crewMass function here:
function crewMass(arr) {
  let totalMass;
  let masses = [];
  for (vals in crew) {
    masses.push(crew[vals].mass)
  }

  totalMass = masses.reduce(function (a, b) {
    return a + b;
  })

  return Math.round(totalMass*10)/10;
}

// Code your fuelRequired function here:
function fuelRequired() {
  let rocketM = 75000;
  let crewM = crewMass(crew);
  let totalM = crewM + rocketM;
  let fuelNeeded = totalM * 9.5;
  let species = [];
  for (member in crew) {
    species.push(crew[member].species);
    // console.log(species)
    // console.log(crew[member].species)
  }
  for (let i = 0; i < species.length; i++) {
    if (species[i] === 'dog' || species[i] === 'cat') {
      fuelNeeded += 200;
    } else {
      fuelNeeded += 100;
    } 
  }

console.log(species)
  return Math.ceil(fuelNeeded);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'rate': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'rate': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.7,
  'rate': function (hrs) { return 0.022 * hrs }, 'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'rate': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'rate': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'rate': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateB, candidateD, candidateF];


console.log(fuelRequired())
console.log(crewMass(crew))