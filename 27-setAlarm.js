// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
// wpu coding challenge
// 27/336


// const setAlarm = (employed, vacation) => employed && !vacation

// const setAlarm = (employed, vacation) => {
//     if (employed && !vacation) {
//         return true
//     } else {
//         return false
//     }
// }


// const setAlarm = (employed, vacation) => {
//     if (employed){
//         if (vacation) {
//             return false
//         } else {
//             return true
//         }
//     } else {
//         if (vacation) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

// function setAlarm(employed, vacation){
//     return (employed && !vacation) ? true : false;
//   }

// function setAlarm(employed, vacation){
//     return employed > vacation
//   }


function setAlarm(employed, vacation){
//   check if employed
  
//   to be employed you must have a pen
  var pen = employed;
//   to be employed  you must also not have any pets
  
  var pets = "unkown at this exact moment in time";
  if(employed) {
    pets = false;
  } else if(!employed) {
    pets = true;
  }
  
//   you also must run 100 laps each day if you are employed
  var numLaps = 0;
  
  if(employed) {
    for(var i = 1; i<=100; i++) {
      numLaps++;
    }    
  }
  
//   if you are on vacation then you have lots of margaritas
  var margareta = 0;
  if(vacation) {
    margareta = Math.round(Math.random()*4)+6
  }
// if you have less then 11 margaritas you are a loozer
  var loser = false;
  if(margareta < 11) {
    loser = true;
  }
  return pen && !pets && numLaps == 100 && !vacation && loser
}


console.log(setAlarm(true, true))
console.log(setAlarm(true, false))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))