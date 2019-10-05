//  Class 6 Studio: More Functions

//  11.11.1.1 Part A: Find the Minimum Value

let testArr1 = [ 5, 10, 2, 42 ];
let testArr2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let testArr3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

let minNum;
function minVal(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    // numArr.sort(function(a, b) {
    //   return a - b;
    // });
    for (let j = 0; j < numArr.length; j++) {
      if (numArr[i] < numArr[j]) {
        let minNum = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = minNum;
      }
    }
  }
  return numArr[0];
}

// function minVal(arr) {
//   let min = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }


// console.log(minVal(testArr1));
// console.log(minVal(testArr2));
// console.log(minVal(testArr3));

//  11.11.1.2 Part B: Create a New Sorted Array

let sortedNums = [];
function sortedArr(anArr) {
  while (anArr.length > 0) {
    sortedNums.push(anArr.shift(minVal(anArr)));
  }
  return sortedNums;
}
// console.log(sortedArr(testArr2));
// console.log(testArr2);

// 11.11.3 Part C: Number Sorting the Easy Way

let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// console.log(nums1.sort(function(a, b){return a-b;}));
// console.log(nums2.sort(function(a, b){return a-b;}));
// console.log(nums3.sort(function(a, b){return a-b;}));

// console.log(nums1.sort(function (a, b) { return a - b; }).reverse());
// console.log(nums2.sort(function (a, b) { return a - b; }).reverse());
// console.log(nums3.sort(function (a, b) { return a - b; }).reverse());

//  11.11.5 Bonus Mission
let theMin;
let lowest = [];
function sortIt(arr) {
  // if (lowest === arr.sort(function (a, b) { return a - b; })) {
  //   console.log(lowest)
  //   return lowest;
  // } else {
    for (let i = 0; i < arr.length; i++) {
      // for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[i]) {
          lowest.push((arr[i]));
        } 
          else {
          lowest.push(arr[i]);
          // sortIt(arr)
        }
            
      // }
      
    }
  
  // }
  return lowest;
}  

console.log(lowest)
console.log(sortIt(nums1));