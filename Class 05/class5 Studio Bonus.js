//  Class 05 Functions Exercise 01, funPhrase

// 10.11.4 Bonus Missions

function funPhrase(aString) {
  let myChars;
  if (aString.length <= 3) {
    myChars = aString.slice(aString.length - 1)
  } else if (aString.length > 3) {
    myChars = aString.slice(0, 3);
  }
  return `We put the '${myChars}' in '${aString}'.`;
}
// console.log(funPhrase('cat'));
// console.log(funPhrase('Funkytown'));

let str = funPhrase('Ez');
console.log(str);

//  Functions Exercise 02, area funcion

function getArea(length, width = length) {
  let area;
  area = length * width;
  return `The area is ${area} cm^2.`
}
console.log(getArea(2, 4));
console.log(getArea(14, 7));
console.log(getArea(20));