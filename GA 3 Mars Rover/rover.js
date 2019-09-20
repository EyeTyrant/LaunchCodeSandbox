const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let response = {
      message: [],
      results: []
    };
    let validComs = ['MOVE', 'STATUS_CHECK', 'MODE_CHANGE'];
    let coms = message.commands;
    response.message.push(`NAME: ${message.name}`)

    for (let commands in coms) {
      let comType = coms[commands].commandType;
      let comValue = coms[commands].value;

      if (comType === 'MOVE' && this.mode === 'NORMAL') {
        response.message.push(comType, comValue)
        response.results.push({ completed: true, position: comValue });
        this.position = comValue;
      } else if (comType === 'MOVE' && this.mode === 'LOW_POWER') {
        response.message.push(comType, comValue)
        response.results.push({ completed: false, position: this.position });
      }

      if (comType === 'STATUS_CHECK') {
        response.message.push(comType)
        response.results.push(
          {
            completed: true,
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
          });
      }

      if (comType === 'MODE_CHANGE' && comValue === 'NORMAL') {
        response.message.push(comType, comValue)
        response.results.push({ completed: true });
      } else if (comValue === 'LOW_POWER') {
        response.message.push(comType, comValue)
        response.results.push({ completed: true });
        this.mode = 'LOW_POWER';
        this.generatorWatts = 10;
        this.position = this.position;
      }
    }
    return response;
  }
}

let myComs = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 141516), new Command('STATUS_CHECK')];
// let myComs1 = [new Command('MODE_CHANGE', 'NORMAL'), new Command('MOVE', 141516), new Command('STATUS_CHECK')];
let testMsg = new Message('test1', myComs);
let myRov = new Rover(223);
console.log(myRov.receiveMessage(testMsg));


module.exports = Rover;