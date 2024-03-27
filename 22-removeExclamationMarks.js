// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// wpu coding challenge
// 22/336

// const removeExclamationMarks = (s) => {
//    let result = '';

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== '!') {
//             result += s[i];
//         }
//     }
//     return result;
//   }

// const removeExclamationMarks = (s) => {
//     return s.split('!').join('');
// }

// function removeExclamationMarks(s) {
//     return s.replace(/!/gi, '');
//   }

// function removeExclamationMarks(s) {
//     return s.replaceAll('!', '');
//   }

// function removeExclamationMarks(s) {
//     var arr =s.split("");
//     arr = arr.filter(function(e){
//           return e !== "!";
//       })
//       return arr.join("");
//   }

// const removeExclamationMarks = (s) => {
//     return s.split('').filter((letter) => letter !== '!').join('')
//   }

function removeExclamationMarks(s) {
    var result = "";
    var arrStr = s.split("");
    for (var i = 0; i < arrStr.length; i++) {
      if (arrStr[i] == "!") {
        arrStr[i] = '';
      }
    }
    for (var j = 0; j < arrStr.length; j++) {
      result += arrStr[j];
    }
    return result;
  }

console.log(removeExclamationMarks("Hello World!"))