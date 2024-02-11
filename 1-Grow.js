// https://www.codewars.com/kata/57f780909f7e8e31830000d4
// wpu coding challenge
// 1/336

// function grow (x) {
//     let result = x[0]
//     for (let i = 1; i < x.length; i++) {
//         result *= x[i]
//     }
//     return result
// }

// const grow=x=> x.reduce((a,b) => a*b);

// const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i];
//     }
//     return res;
//   };

// const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i];
//     }
//     return res;
//   };

// function grow(x){
//     return x.reduce((a, b)=> a * b,1);
//   }

// const grow=x=>eval(x.join("*"))

// function grow(x){
//     return x.reduce((accumulator, currentVal) => accumulator *= currentVal, 1);
//   }

// function grow(x){return x.reduce((a,b)=>a*b)};

// let grow = x => x.reduce( (sum,el) => sum * el )

// function grow(x){
//     let counter = x[0]
//       for(let i=1; i<x.length; i++){
//         counter = counter * x[i]
//       }
//     return counter
//     }

// function grow(x){

//     var sum = x.reduce(function (a, b) {return a * b;});

//       return sum

//     }

// function grow(x){
//   const result = x.reduce((a, b) => a * b, 1);
//   return result;
// }

// const grow = () => [1,2,3,4].reduce((a, b) => a * b, 1);

// console.log(grow());
