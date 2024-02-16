// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
// wpu coding challenge
// 13/336

// function points (games) {

//     let result = 0

//     for (let i = 0; i < games.length; i++) {

//         if (games[i][0] > games[i][2]) {

//             result += 3 ;

//         } else if (games[i][0] ===games[i][2]) {
//             result += 1
//         } else {
//             result += 0
//         }
//     }

//     return result
// }

// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)

// const points = (games) => {
//     const result = games.reduce((acc,[x,_,y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0)
//     return result
// }

// function points(games) {
//     let total = 0;
//     games.map(game => {
//       if (game[0] === game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }

// const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

// function points(games) {
//   // totalPoints will store the accumulated points
//   let totalPoints = 0;

//   // loop through the games array to get the scores
//   for (i = 0; i < games.length; i++) {
//     // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
//     let xScore = Number(games[i].charAt(0));
//     let yScore = Number(games[i].charAt(2));

//     // Add points depending on the values of xScore compared to yScore
//     if (xScore > yScore) {
//       totalPoints += 3;
//     }
//     if (xScore < yScore) {
//       totalPoints += 0;
//     }
//     if (xScore === yScore) {
//       totalPoints += 1;
//     }
//   }

//   return totalPoints;
// }

// function points(games) {
//     return games.reduce((current, element) => {
//       let arraySplit = element.split(':');
//       return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
//     }, 0);
//   }

// const points = a => a.reduce((r, e) => {
//     const x = e[0];
//     const y = e[2];
//     return r + (x > y ? 3 : x < y ? 0 : 1);
//   }, 0);

// const points = games => games
//   .map(str => str.split(':').map(Number))      // parse
//   .map(([x, y]) => x > y ? 3 : x < y ? 0 : 1)  // determine points
//   .reduce((sum, points) => sum + points, 0);   // sum points

function points(games) {
    return games.map(x => x[0] - x[2])
                .filter(x => x >= 0)
                .reduce((a, b) => a + (b > 0 ? 3 : 1), 0);
  }

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:4", "1:4", "2:3", "2:4", "3:4"])
);
