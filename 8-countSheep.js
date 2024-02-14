// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// wpu coding challenge
// 8/336

// const countSheep = (num) => {
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         // result +=  i + ' sheep...';
//         result += ` ${i} sheep...`;
//     }
//     return result;
// }

// const countSheep = (num) => {
//     return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
// }

// const countSheep = (num) => {
//     return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join(' ');
// }

// const countSheep = function (num){
//     let newStr = '', i = 0;
//     while(i < num) {
//       newStr += `${++i} sheep...`;
//     }
//     return newStr
//   }

// function countSheep (num) {
//     const arr = [];
//     for (i = 1; i <= num; i++) {
//       arr.push(i + " sheep...");
//     }
//     return arr.join('');
//   }

// const countSheep = (n) => Array.from({ length: n }, (_, i) => ++i + ' sheep...').join('')

const countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

console.log(countSheep(3));
