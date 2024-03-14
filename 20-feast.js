// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
// wpu coding challenge
// 20/336

// const feast = (beast, dish) => {
//     if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
//         return true
//     } else {
//         return false
//     }
// }

// const feast = (beast, dish) => {
//     return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)
// }

// function feast(beast, dish) {
//     return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
//   }

// function feast(beast, dish) {
//     return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
//   }

// function feast(beast, dish) {
//     return beast.first() + beast.last() == dish.first() + dish.last();
//   }
  
//   String.prototype.first = function() {
//     return this[0];
//   }
  
//   String.prototype.last = function() {
//     return this[this.length-1];
//   }

// const feast=(beast, dish)=>beast.slice(0,1)==dish.slice(0,1)&&beast.slice(-1)==dish.slice(-1)

// const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

// const feast = (b, d) => d.startsWith(b[0]) && d.endsWith(b[b.length-1])

// function feast(beast, dish) {
//     return beast[0] === dish[0] &&
//       beast.substr(-1) === dish.substr(-1);
//   }

// function feast(beast, dish) {
//     var v1 = beast.split("").shift();
//     var v2 = beast.split("").pop();
//     var v3 = dish.split("").shift();
//     var v4 = dish.split("").pop();
//     return (v1 === v3 && v2 === v4);
//   }

const feast=(a,b,f=s=>s[0]+s[s.length-1])=>f(a)==f(b)

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw"))


console.log(!!"false" == !!"true")