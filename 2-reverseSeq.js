//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
// wpu coding challenge
// 2/336


// function reverseSeq(n) {
//     let result = [];
//     for (let i = n; i > 0; i--) {
//         console.log(i)
//         result.push(i);
//     }
//     return result;
// }

// const reverseSeq = n => Array.from({ length: n }, (_, i) => n - i);


// const reverseSeq = length => Array.from({length}, () => length--)

// const reverseSeq = (n) => {
    // return Array(n).fill().map((el, i) => i + 1 ).reverse()
//     return [...Array(n)].fill().map((el, i) => i + 1 ).reverse();
// }

// const reverseSeq = n => {
//     let arr = [];
  
//     while(n > 0) {
//       arr.push(n);
//       n--;
//     }
//     return arr;
//   };

// console.log(reverseSeq(5))