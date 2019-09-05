// Class 7 Studio2: Objects & Math

//  12.8.3: Orbit Calculations

// Code your orbitCircumference function here:
function orbitCircumference(altitude) {
  let r = altitude;
  let pi = Math.PI;
  return Math.round(2*pi*r);
}
// console.log(calcCircum(2000))

// Code your missionDuration function here:

function missionDuration(orbits, radius = 2000, speed = 28000) {
let duration;
let distance = orbitCircumference(radius);
time = orbits * distance / speed;
duration = Math.round(time * 100) / 100;
  return duration;
  // `The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.`;
}

// console.log(missionDuration(5))

// Copy/paste your selectRandomEntry function here:


function selectRandomEntry(arr) {
  let randomId = [];
  randomId = arr[Math.floor(Math.random() * arr.length)];
  return randomId;
}


// Code your oxygenExpended function here:

function oxygenExpended(orbits, crew) {
  let member;
  member = selectRandomEntry(crew);
  let duration = missionDuration(orbits);
  let consumed = Math.round(member.rate(duration)*1000)/1000;
  return `${member.name} will perform the spacewalk, which will last ${duration} hours and require ${consumed} kg of oxygen.`
}


// Candidate data & crew array.
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
  'mass': 3.6,
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

let crew = [candidateA, candidateC, candidateE];

console.log(oxygenExpended(3, crew))