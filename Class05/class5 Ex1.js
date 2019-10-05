//  Class 05 Exercises 01: Functions are at your beck and call

function line(size) {
  let hash = [];
  for (let i = 0; i < size; i++) {
    hash.push('#');
  }
  return hash.join('');
}

function rectangle(width, height) {
  let myRec = [];
  for (let i = 0; i < height; i++) {
    myRec.push(line(width));
    console.log(myRec);
  }
  return myRec.join('\n');
}
// myRec(4, 5)
console.log(myRec(3, 4));