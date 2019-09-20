const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe('Rover class', function () {
  it('constructor sets position and default values for mode and generatorWatts', function () {
    let myRover = new Rover(1234);
    expect(myRover.position = 1234).toBe(this.position = 1234);
    expect(myRover.mode = 'NORMAL').toBe(this.mode = 'NORMAL');
    expect(myRover.generatorWatts = 110).toBe(this.generatorWatts = 110);
  });
  it('response returned by receiveMessage contains name of message', function () {
    let commands = new Command('MOVE', 4455);
    let transmission = new Message('test1', commands);
    let myRover = new Rover(456);
    myRover.receiveMessage(transmission);
    expect(transmission.name).toBe('test1');
  });
  it('response returned by receiveMessage includes two results, if two commands are sent in message', function () {
    let commands = [new Command('MOVE', 1415), new Command('MODE_CHANGE', 'NORMAL')];
    let transmission = new Message('test1', commands);
    let myRover = new Rover(456);
    let call = myRover.receiveMessage(transmission);
    expect(call.results).toEqual([
      { completed: true, position: 1415 },
      { completed: true }]);
  });
  it('reponds correctly to status check', function () {
    let commands = [new Command('STATUS_CHECK')];
    let transmission = new Message('test1', commands);
    let myRover = new Rover(456);
    let call = myRover.receiveMessage(transmission);
    expect(call.results).toEqual([
      {
        completed: true,
        mode: 'NORMAL',
        generatorWatts: 110,
        position: 456
      }]);
  });
  it('responds with correct status after MODE_CHANGE', function () {
    let commands = [new Command('MODE_CHANGE', 'NORMAL')];
    let transmission = new Message('test1', commands);
    let myRover = new Rover(456);
    let call = myRover.receiveMessage(transmission);
    expect(call.results).toEqual([{ completed: true }]);
    expect(myRover.mode).toEqual('NORMAL');
  });
  it('responds with false completed value, if attempt to move while in LOW_POWER mode', function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1415)];
    let transmission = new Message('test1', commands);
    let myRover = new Rover(456);
    let call = myRover.receiveMessage(transmission);
    expect(call.results).toEqual([
      { completed: true },
      { completed: false, position: 456 }
    ]);
  });
  it('responds with position for move command', function () {
    let commands = [new Command('MOVE', 1415)];
    let transmission = new Message('test1', commands);
    let myRover = new Rover(456);
    let call = myRover.receiveMessage(transmission);
    expect(call.results).toEqual([{ completed: true, position: 1415 }]);
  });
});