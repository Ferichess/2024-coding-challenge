// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// wpu coding challenge
// 12/336

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b)

// const arrayPlusArray = (arr1, arr2) => {
//     let result = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         result += arr1[i];
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         result += arr2[i];
//     }

//     return result
// }

// function arrayPlusArray(arr1, arr2) {
//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       result += arguments[i][j];
//     }
//   }

//   return result;
// }

// const arrayPlusArray = (arr1, arr2) => {
//     return [...arr1, ...arr2].reduce((a, b) => a + b)
// }

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }

// function arrayPlusArray(...arrays) {
//     return [].concat(...arrays).reduce((a,b) => a+b,0)
//   }

function arrayPlusArray(arr1, arr2) {
    let join = arr1.concat(arr2);
  
    function getSum(a,b) {
      return a+b;
    }
      return join.reduce(getSum);
  }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
