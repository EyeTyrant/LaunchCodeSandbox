// Class 7 Studio2: Objects & Math

//  12.8.3: Orbit Calculations

// Code your orbitCircumference function here:
function calcCircum(altitude) {
  let r = altitude;
  let pi = Math.PI;
  return Math.round(2*pi*r);
}
// console.log(calcCircum(2000))

// Code your missionDuration function here:

function missionDuration(orbits, radius = 2000, speed = 28000) {
let duration;
let distance = calcCircum(radius);
time = orbits * distance / speed;
duration = Math.round(time * 100) / 100;
  return `The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.`;
}

// console.log(missionDuration(5))

// Copy/paste your selectRandomEntry function here:


function selectRandomEntry(arr) {
  let cadets = [];
  let randomId = [];
  let number;
  number = randomNum(arr);

  // while (randomId.length < 3) {
  //   if (!randomId.includes(number)) {
  //     randomId.push(number);
  //   } else {
  //     randomNum(arr);
  //   }
  // }

  function randomNum(numArr) {
    number = numArr[Math.floor(Math.random() * arr.length)];
    return number;
  }

  for (keys in arr) {
    if (randomId.includes(arr[keys].astronautID)) {
      cadets.push(arr[keys].name);
    }
  }
  // return number;
  // console.log(arr)
  return cadets;
}


// Code your oxygenExpended function here:

function oxygenExpended(orbits, crew) {
  let memeber = selectRandomEntry(crew);
  
  // let consumed = member.rate(duration)
  let duration = missionDuration(orbits);
  // let consumed = member.rate(duration);
  
  

  // console.log(member)
  console.log(duration)
  console.log(consumed)
  return `${member} will perform the spacewalk, which will last ${duration} hours and require ${consumed} kg of oxyget.`
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


console.log(selectRandomEntry(crew))
console.log(oxygenExpended(3, crew))