// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// wpu coding challenge
// 19/336


// const sumMix = (x) => {
//     let sum = 0
//     for (let i = 0; i < x.length; i++) {
//         sum += Number(x[i])
//     }
//     return sum
// }

// const sumMix = (x) => x.map(Number).reduce((a, b) => a + b);

// const sumMix = (x) => {
//     return x.reduce((acc, curr)=> acc + Number(curr), 0)
// }
// const sumMix = (x) => x.reduce((acc, curr)=> acc + +curr, 0)

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }

// function sumMix(x){
//     let result = 0;
//     for (let n of x) {
//       result += parseInt(n);
//     }
//     return result;
//   }


// function sumMix(x) {
//     if (Array.isArray(x)) {
//         var sum = 0;
//         x.forEach(function (element) {
//                 sum += Number (element);
        
//         });
//     };
//     return sum;

// }

// function sumMix(x){
//     return eval( x.join("+") )
//   }

function sumMix(x){
    let sum = 0;
    for(let num of x) {
       typeof num === "string" ? sum += Number(num) : sum += num;
    }
    return sum;
}


console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)