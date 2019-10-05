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

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

// Siphon Fuel

let parrotFood = function (fuelLevel) {
  if (fuelLevel > 100000) {
    return 1;
  } else if (fuelLevel <= 100000 && fuelLevel > 50001) {
    return fuelLevel = 49999;
  } else if (fuelLevel <= 50000) {
    return fuelLevel;
  }
  return fuelLevel - fuelLevel;
};
console.log(parrotFood(10000));

// Steal Cargo

let valuables = ['dilithium', 'gold', 'AE-35 unit', 'Legos', 'TI-89 calculator'];
let swag = [];

let deckMops = function(arr) {
  for (let i = 0; i < cargoHold.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (cargoHold[i] === arr[j]) {  
        swag.push(cargoHold[i]);
        cargoHold.splice(cargoHold.indexOf(arr[j]), 1, 'cheese');  
      }
    }
  }
  return swag;
};
console.log(deckMops(valuables));
console.log(cargoHold)
// console.log(swag)

// IRS Report

function irs(fuelLevel, cargoHold) {
  parrotFood(fuelLevel);
  deckMops(cargoHold);
  return `Raided ${fuelLevel} kg of fuel from the tanks, and stole ${swag[0]} and ${swag[1]} from the cargo hold.`
}
console.log(irs(60001, ['air', 'AE-35 unit', 'gold', 'food']));

// irs(60001, ['air', 'AE-35 unit', 'gold', 'food']) should return a report for 10000 kg of fuel, an AE - 35 unit, and gold.