// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// wpu coding challenge
// 25/336


// function doubleChar(str) {
//     // return str.split('').map(x => x + x).join('');
//     return [...str].map(x => x + x).join('');

// }


// function doubleChar(str) {
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + str[i]
//     }
//     return result

// }

// function doubleChar(str) {
//     return str.replace(/(.)/g, "$1$1")
//   }

function doubleChar(str) {
    let res = '';
    for (let i in str) {
      res += str[i].repeat(2);
    }
    return res;
  }

console.log(doubleChar("The"))
console.log(doubleChar("Adidas"))