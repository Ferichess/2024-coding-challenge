// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// wpu coding challenge
// 15/336

// const sumArray = (array) => {
//     if( array == null || array.length <= 2 ) return 0
//     const sorted = array.sort((a, b) => a - b)
//     let result = 0
//     for(let i = 1; i < sorted.length - 1; i++) {
//         result += sorted[i]
//     }
//     return result
// }

// const sumArray = (array) => {
//     if( array == null || array.length <= 2 ) return 0
//     return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
// }
// const sumArray = (array) => {
//     return array == null || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
// }

// function sumArray(array) {
//     if (array == null) {
//       return 0;
//     } else if (array.length < 2) {
//       return 0;
//     } else {
//       array = array.sort(function(a,b) {return a - b;});
//       var total = 0;
//       for (var i = 1; i < array.length - 1; i++) {
//         total += array[i];
//       }
//       return total;
//     }
//   }

// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

// function sumArray(array) {
//     return Array.isArray(array) && array.length > 1 ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array) : 0;
//   }

// function sumArray(array) {
  
//     if (array == null || array.length <= 2) {
//       return 0
//     }
    
//     var max = Math.max.apply(Math, array);
//     var min = Math.min.apply(Math, array);
//     var sum = 0
    
//     for (i = 0; i < array.length; i++) {
//       sum += array[i];
//      }
  
//     return sum - max - min
//   }

// function sumArray(arr) {
//     if(!arr || arr.length <= 2) return 0;
    
//     var min, max, result;
//     result = 0;
//     min = max = arr[0];
    
//     arr.forEach(function(el){
//       result += el;
//       min > el ? min = el : max < el ? max = el : el;
//     });
    
//     return result - max - min;
//   }

// function sumArray(array) {
//     return !array || array.length < 4 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b);
//   }

const sumArray = (array) => !array ? 0 : array.sort((a, b)=> a - b).slice(1,-1).reduce((acc, el)=> acc + el, 0)

console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([ -6, -20, -1, -10, -12]))