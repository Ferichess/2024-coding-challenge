// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// wpu coding challenge
// 21/336

// const rentalCarCost = (d) => {
//     if (d >= 7) {
//         return d * 40 - 50
//     } else if (d >= 3) {
//         return d * 40 - 20
//     } else {
//         return d * 40
//     }
// }

// const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0)

// function baseCost(days, rate) {
//     return days * rate;
//   }
  
//   function discountRate(days) {
//     if ( days >= 7 ) {
//       return 50;
//     }
//     else if ( days >= 3 ) {
//       return 20;
//     }
//     else {
//       return 0;
//     }
//   }
  
//   function rentalCarCost(days) {
//     return baseCost(days, 40) - discountRate(days);
//   }

// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// function rentalCarCost(d) {
//     if(d<3) return d * 40;
//     if(7>d && d>=3) return (d*40 -20);
//     if(d>=7) return (d*40 -50);
//   }

// function rentalCarCost(days) {
//     var dayCost = 40;
    
//     var discount = 0;
//     if(days >= 3) discount += 20;
//     if(days >= 7) discount += 30;
    
//     return dayCost * days - discount;
// }

function rentalCarCost(d) {
	var amount,
		dailyCharge = 40;
	if(d >= 7) {
		amount = (dailyCharge * d) - 50;
	} else if (d >= 3) {
		amount = (dailyCharge * d) - 20;
	} else {
		amount = dailyCharge * d;
	}
	return amount;
}

console.log(rentalCarCost(1))
console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(7))
console.log(rentalCarCost(15))