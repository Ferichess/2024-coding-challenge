// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// wpu coding challenge
// 16/336

// const getAverage = (marks) => {
//     return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
// }

// const getAverage = (marks) => {
//     let total = 0;

//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//     if (marks.length > 0) {
//         return Math.floor(total / marks.length);
//     } else {
//         return 0
        
//     }
// }
// const getAverage = (marks) => {
//     let total = 0;

//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//    return Math.floor(total / marks.length);
// }

// var getAverage = ( m ) => parseInt(m.reduce((a, b)=> a + b)/ m.length)

// const getAverage = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);

const getAverage = marks => (marks.reduce((a, b) => a + b) / marks.length) | 0;

console.log(getAverage([2, 2, 2, 2]))
console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))