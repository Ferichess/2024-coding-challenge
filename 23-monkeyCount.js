// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
// wpu coding challenge
// 23/336

// const monkeyCount = (n) => {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// function monkeyCount(n) {
//     return Array.from({ length: n }, (_, i) => i + 1);

// }

// function monkeyCount(n) {
//     for (var i = 0, arr = []; i < n; arr.push(++i));
    
//     return arr;
//   }

// function monkeyCount(n) {
//     return [...Array(n).keys()].map(a => a+1)
//     }

// function monkeyCount(n) {
//     return [...Array(n+1).keys()].slice(1);
// }

const monkeyCount = n =>
  [...Array(n)].map((_, idx) => ++idx);

console.log(monkeyCount(10));