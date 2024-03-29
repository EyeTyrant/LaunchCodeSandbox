class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error('Command Type required')
    }
    this.value = value;
  }
}

module.exports = Command;