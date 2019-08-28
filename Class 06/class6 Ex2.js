// Class 06 Exercises: More Functions (Part 2)

function checkFuel(level) {
  if (level > 100000) {
    return 'green';
  } else if (level > 50000) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr) {
  if (arr.length < 7) {
    return `Spaces available: ${7 - arr.length}.`;
  } else if (arr.length > 7) {
    return `Over capacity by ${arr.length - 7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

// console.log("Fuel level: " + checkFuel(fuelLevel));
// console.log("Hold status: " + holdStatus(cargoHold));


let parrotFood = function (fuelLevel) {
  return fuelLevel - 99999;

};

// console.log(parrotFood(fuelLevel));

let deckMops = function (loot) {
  let valuables = ['dilithium', 'gold', 'AE-35 unit', 'Legos', 'TI-89 calculator'];
  loot = [];
  // for (let j = 0; j < valuables.length; j++) {
  //   for (let i = 0; i < cargoHold.length; i++) {
  //     if (cargoHold[i] === valuables[j]) {
  //       loot.push(cargoHold.splice(cargoHold.indexOf('gold'), 1, 'cheese')); 
  //     } else if (cargoHold[i] === valuables[j]) {
  //       loot.push(cargoHold.splice(cargoHold.indexOf('AE-35 unit'), 1, 'toilet paper'));
  //     }
  //   }
  // }
  // console.log(cargoHold);
  // console.log(loot);
  // return loot[0].concat(loot[1]);
  
  for (let i = 0; i < valuables.length; i++) {
    for (let j = 0; j < cargoHold.length; j++) {
      if (valuables[i] === cargoHold[j]) {
        // loot.push(cargoHold.splice(cargoHold[j]), 1, 'cheese');
        // loot.push(cargoHold.splice(cargoHold.indexOf(cargoHold[j]), 1, 'cheese', 'tp')); 
        loot.push(cargoHold[j]);
        cargoHold.splice(cargoHold.indexOf(cargoHold[j]), 1, 'cheese');
      }
    }
    
  }
  // console.log(loot)
  return loot;
  // loot = cargoHold.filter(function(booty) {
  //   return valuables.includes(booty);
  // });
  
  
};
console.log(cargoHold);

console.log(deckMops(cargoHold));

// function irs(fuelLevel, cargoHold) {
//   parrotFood();
//   deckMops();
//   return `Raided ${fuelLevel} kg of fuel from the tanks, and stole ${loot[0]} and ${loot[1]} from the cargoHold.`
// }

// console.log(irs());
