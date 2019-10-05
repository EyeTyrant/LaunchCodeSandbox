// Class 10 Exercises: Exceptions Part 2

function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result;    
    try {
     result = labs[i].runLab(3) === 27;
    } catch(err) {
      result = 'Error thrown';
    } 
    console.log(`${lab.student}'s code worked: ${result}`);
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
      return num * num;
    }
  }
];

let studentLabs2 = [
  {
    student: 'Blake',
    myCode: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Jessica',
    runLab: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Mya',
    runLab: function (num) {
      return num * num;
    }
  }
];
// for (let i = 0; i < studentLabs2.length; i++){
//     console.log(studentLabs2[i].runLab)
// }

gradeLabs(studentLabs2);