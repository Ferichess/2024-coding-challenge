// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
// wpu coding challenge
// 17/336

// const areaOrPerimeter = (l, w) => l == w ? l * w : 2 * (l + w)

// const areaOrPerimeter = (l, w) => {
//     if (l == w) {
//         return l * w
//     } else {
//         return 2 * (l + w)
//     }
// }

const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };


console.log(areaOrPerimeter(4, 4));
console.log(areaOrPerimeter(6, 10))