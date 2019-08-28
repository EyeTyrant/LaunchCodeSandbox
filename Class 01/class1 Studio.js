// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:25:34 AM';

// Prompt for astronaut count
const astronautCount = prompt('How many space cadets on this7 bus?');
// const input = require('readline-sync');
// let astronautCount = Number(input.question('How many space cadets on this bus?'));

let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100 + '%';
let weatherStatus = 'clear';

let overallStatus = 'YES';
let dash = '--------------------------------------';
let space = '\n\n';
let metric = ' kg';



// Write code to generate the LC04 report here:
console.log(dash);
console.log('> LC04 - LAUNCH CHECKLIST');
console.log(dash);
console.log('Date: ' + date + '\nTime: ' + time + space);

console.log(dash);
console.log('> ASTRONAUT INFO');
console.log(dash);
console.log('* count: ' + astronautCount + '\n* status: ' + astronautStatus + space);

console.log(dash);
console.log('> FUEL DATA');
console.log(dash);
console.log('* Fuel temp celsius: ' + fuelTempCelsius + ' C' + '\n* Fuel level: ' + fuelLevel + space);

console.log(dash);
console.log('> WEIGHT DATA');
console.log(dash);
console.log('* Crew mass: ' + crewMassKg + metric + '\n* Fuel mass: ' + fuelMassKg + metric + '\n* Shuttle mass: ' + shuttleMassKg + metric + '\n* Total mass: ' + totalMassKg + metric + space);

console.log(dash);
console.log('> FLIGHT PLAN');
console.log(dash);
console.log('* weather: ' + weatherStatus + space);

console.log(dash);
console.log('> OVERALL STATUS');
console.log(dash);
console.log('* Clear for takeoff: ' + overallStatus);

// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.