//  Class 05 Exercises 03: Functions are at your beck and call

function spaceLine(numSpaces, numChars, character) {
  let spaces = [];
  let chars = [];
  let line = [];
  character = character;
  for (let i = 0; i < numSpaces; i++) {
    spaces.push(' ');
  }
  for (let i = 0; i < numChars; i++) {
    chars.push(character);
  }
  line = spaces.concat(chars, spaces);
  return line.join('');
}
// console.log(spaceLine(3, 5, '#'));

function diamond(height, character) {
  // character = character;
  let rows = [];
  let level = 0;
  let charsInLine = 2 * level + 1;
  let spacesInLine = height - charsInLine;
  for (let i = 0; i < height; i++) {
    rows.push(spaceLine(spacesInLine, charsInLine, character));
    level += 1;
    charsInLine += 2;
    spacesInLine--;
  }
  return rows.join('\n') + '\n' + rows.reverse().join('\n');
}
console.log(diamond(4, 'X'));