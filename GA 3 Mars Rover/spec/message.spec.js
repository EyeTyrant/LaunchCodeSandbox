const assert = require('assert');
const Message = require('../message.js');

describe("Message class", function () {
  it("throws error if name NOT passed into constructor", function () {
    assert.throws(
      function () {
        new Message();
      },
      {
        message: 'Name required'
      }
    );
  });
  it('constructor sets name', function () {
    let expected = Message.name = 'name';
    let actual = this.name = 'name';
    assert.strictEqual(actual, expected);
  });
  it('contains commands passed into constructor as 2nd argument', function () {
    let myMsg = new Message('name', 'instructions');
    let expected = myMsg.commands = 'instructions';
    let actual = this.commands = 'instructions';
    assert.strictEqual(actual, expected);
  });
});