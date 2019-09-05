// Class 7 Studio: Objects & Math

// 12.8.2.1: Randomly Select ID Numbers

// Code your selectRandomEntry function here:
let randomId = [];
function selectRandomEntry(arr) {
let cadets = [];

let number;
number = randomNum(arr);

while (randomId.length < 3) {
  if (!randomId.includes(number)) {
    randomId.push(number);
  } else {
    randomNum(arr);
  }
}

function randomNum(numArr) {
    number = numArr[Math.floor(Math.random() * arr.length)];
    return number;
  }
  
  for (keys in animals) {
    if (randomId.includes(animals[keys].astronautID)) {
      cadets.push(animals[keys].name);
    }
  }

  return `${cadets[0]}, ${cadets[1]}, and ${cadets[2]} are going to space!`;
}

// 12.8.2.2: Build a crew Array

// Code your buildCrewArray function here:
let crew = [];

function buildCrewArray(arr1, arr2) {
  selectRandomEntry(idNumbers);
  for (keys in arr2) {
    if (arr1.includes(arr2[keys].astronautID)) {
      crew.push(arr2[keys].name);
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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
  'rate': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
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

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements:
console.log(buildCrewArray(randomId, animals))
console.log(selectRandomEntry(idNumbers))