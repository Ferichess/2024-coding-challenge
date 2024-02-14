// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// wpu coding challenge
// 9/336

// const min = (list) => {
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++) {
//         if(list[i] < minValue) {
//             minValue = list[i];
//         }
//     }
//     return minValue
// }


// const max = (list) => {
//     let maxValue = list[0];
//     for(let i = 1; i < list.length; i++) {
//         if(list[i] > maxValue) {
//             maxValue = list[i];
//         }
//     }
//     return maxValue
// }

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];


// spreed oprator digunakan untuk mengcopy semua elemen pada array menjadi variabel baru dengan data yang sama ex [1,2,3,4] => 1,2,3,4

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110)
console.log(min([42, 54, 65, 87, 0]), 0)
console.log(max([4,6,2,1,9,63,-134,566]), 566)
console.log(max([5]), 5)