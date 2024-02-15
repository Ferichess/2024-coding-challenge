// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
// wpu coding challenge
// 11/336

// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!";
//     };
//     if (p1 === "rock" && p2 === "scissors") {
//         return "Player 1 won!";;
//     } else if (p1 === "scissors" && p2 === "paper") {
//         return "Player 1 won!";
//     } else if (p1 === "paper" && p2 === "rock") {
//         return "Player 1 won!";
//     } else {
//         return "Player 2 won!";
//     }
// };
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   };
//   if (
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

// const rps = (p1, p2) => {
//     if(p1 === p2) {
//       return 'Draw!'
//     };
//     return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
//   }

// const rps = (p1, p2) => {
//     var map = {
//       'rock': 'scissors',
//       'scissors': 'paper',
//       'paper': 'rock'
//     };

//     if (p1 == p2) {
//       return 'Draw!';
//     } else {
//       return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
//     }
//   };

// const winsOver = {
//     "rock" : "scissors",
//     "scissors" : "paper",
//     "paper" : "rock"
// };

// const rps = (p1, p2) => {
//   if (p1 === p2)
//     return "Draw!";
//   else if (winsOver[p1] === p2)
//     return "Player 1 won!";
//   else
//     return "Player 2 won!";
// };

// rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

// const rps = (p1, p2) => {
//   return p1 === p2
//     ? "Draw!"
//     : `Player ${
//         (p1 === "rock" && p2 === "scissors") ||
//         (p1 === "scissors" && p2 === "paper") ||
//         (p1 === "paper" && p2 === "rock")
//           ? 1
//           : 2
//       } won!`;
// };

const rps = (p1, p2) => {
    const rules = {
      'scissors': 'paper',
      'rock': 'scissors',
      'paper': 'rock'
    };
    // return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
    return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? 1 : 2} won!`;
  };

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "paper"));
console.log(rps("rock", "scissors"));
console.log(rps("scissors", "scissors"));
console.log(rps("rock", "rock"));
