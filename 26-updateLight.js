// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
// wpu coding challenge
// 26/336


// const updateLight = (current) => {
//     switch (current) {
//         case 'green':
//             return 'yellow';
//         case 'yellow':
//             return 'red';
//         case 'red':
//             return 'green';
//     }

// }

// const updateLight = (current) => {
//     return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
// }

// const updateLight = (current) => {
//     if (current === 'green') {
//         return 'yellow'
//     } else if (current === 'yellow') {
//         return 'red'
//     } else if (current === 'red') {
//         return 'green'
//     }
// }

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))