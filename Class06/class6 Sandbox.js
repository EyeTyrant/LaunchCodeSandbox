//  Class 06 Sandbox

let letter = 'i';

function isVowel(letter) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    if (vowels.includes(letter)) {
      return false;
  }
  return true;
}

console.log(isVowel('o'));

vowels = ['a', 'e', 'i', 'o', 'u'];


function combineEntries(vowels) {
  if (vowels.length <= 1) {
    return vowels[0];
  } else {
    console.log(vowels);
    return vowels[0] + combineEntries(vowels.slice(1));
    
  }
}

console.log(combineEntries(vowels))
