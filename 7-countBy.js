// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
// wpu coding challenge
// 7/336

// const countBy = (x, n) => {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i)
//     }
//     return z
// }

// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

// const countBy = (x, n) =>
//   [...Array(n)].map((_, idx) => ++idx * x);

// function countBy(x, n) {
//   let z = [];
//   while (z.length < n) z.push(x * (z.length + 1));
//   return z;
// }

// function countBy(x, n){
//     return Array.apply(0, Array(n)).map(function(v, i){
//       return (i + 1) * x;
//     });
//   }

// function countBy(x, n) {
//     for (var a = [], i = 0; i < n; i++) {
//       a.push(x * (1 + i))
//     }
  
//     return a
//   }

// function countBy(x, n) {
//     return Array.apply(null, Array(n)).map((_, i) => (i+1)*x);
//   }

// function countBy(x, n) {
//     return Array(n).fill(x).map( (el, ind) => el * (ind + 1) );
//   }

// const countBy = (x, n) => {
//     return [...Array(n)].map((_, i) => (i + 1) * x)
// }

// console.log(countBy(1, 4));
// console.log(countBy(2, 5));
