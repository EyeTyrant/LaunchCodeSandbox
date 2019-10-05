// Class 11 Studio: Classes

// 18.6.3.Part 1 - Add Class Properties
//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name,
    this.mass = mass,
    this.scores = scores
  }
  // 18.6.4.Part 2 - Add First Class Method
  addScore(newScore){
    this.scores.push(newScore);
  }
  // 18.6.5.Part 3 - Add More Methods
  // 18.6.5.1.Calculating the Test Average
  average(){
   return Math.round(this.scores.reduce((a, b) => {return a + b}) / this.scores.length * 10) / 10;
  }
  // 18.6.5.2.Determining Candidate Status
  status(){
    let average = this.average();
    let status;
    if (average >= 90) {
      status = 'Accepted';
    }
    if (average < 90 && average >= 80) {
      status = 'Reserve';
    }
    if (average < 80 && average >= 70) {
      status = 'Probationary';
    } 
    if (average < 70) {
      status = 'Reject'
    }
    return `${this.name} earned an average test score of ${average}% and has a status of ${status}.`
  }
}

let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90])
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97])
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62])

console.log(candidate1)
console.log(candidate2)
console.log(candidate3)
candidate1.addScore(83);
console.log(candidate1.scores)
console.log(candidate2.average())

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// 18.6.6.Part 4 - Play a Bit
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// candidate3.addScore(100)
// candidate3.addScore(100)
// console.log(candidate3.status())
// candidate3.addScore(100)
// candidate3.addScore(100)
// candidate3.addScore(100)
// candidate3.addScore(100)
// console.log(candidate3.status())

while (candidate3.average() < 90) {
  candidate3.addScore(100);
  console.log(candidate3.status())
}