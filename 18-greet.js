// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// wpu coding challenge
// 18/336

// const greet = (name, owner) => {
//     if (name === owner) {
//         return 'Hello boss'
//     } else {
//         return 'Hello guest'
//     }
// }

// const greet = (name, owner) => {
//     if(name === owner){
//         return 'Hello boss'
//     }
//     if(name !== owner){
//         return 'Hello guest'
//     }
// }

// const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))