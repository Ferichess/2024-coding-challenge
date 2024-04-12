// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// wpu coding challenge
// 24/336


// function quarterOf(month) {
//     return Math.ceil(month / 3);
//   }

// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1
//     } else if (month <= 6) {
//         return 2
//     } else if (month <= 9) {
//         return 3
//     } else {
//         return 4
//     }
// }
// const quarterOf = (month) => {
//    return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
// }

// const quarterOf = (month, quarter = 4) => {
// 	switch (month) {
// 		case 1:
// 		case 2:
// 		case 3:
// 			quarter = 1;
// 			break;
// 		case 4:
// 		case 5:
// 		case 6:
// 			quarter = 2;
// 			break;
// 		case 7:
// 		case 8:
// 		case 9:
// 			quarter = 3;
// 			break;
// 	}
// 	return quarter;
// };

const quarterOf = month => {
    //Your code here
    if (month <= 3) {
      return 1;
    } else if (month > 3 && month <= 6) {
      return 2;
    } else if (month > 6 && month <= 9) {
      return 3;
    } else if (month > 9 && month <= 12) {
      return 4;
    } else {
      return 'Error';
    }
  };

  console.log(quarterOf(11))