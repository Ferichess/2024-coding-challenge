// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// wpu coding challenge
// 14/336

// const getGrade = (s1, s2, s3) => {
//     let average = (s1 + s2 + s3) / 3
//     if (average >= 90) {
//         return 'A'
//     } else if (average >= 80) {
//         return 'B'
//     } else if (average >= 70) {
//         return 'C'
//     } else if (average >= 60) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// function getGrade (s1, s2, s3) {
//     avg = (s1+s2+s3)/3;
//     if (avg < 60)  return "F";
//       else if (avg < 70) return "D";
//       else if (avg < 80) return "C";
//       else if (avg < 90) return "B";
//       else return "A";
//   }

// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }

// function getGrade(...s) {
//     const avg = s.reduce((a, b) => a + b) / s.length;
//     if (avg < 60) return "F";
//     if (avg < 70) return "D";
//     if (avg < 80) return "C";
//     if (avg < 90) return "B";
//     return "A";
 
// }

// function getGrade (s1, s2, s3) {
//     var avg = (s1 + s2 + s3)/3;
//     switch(true) {
//       case (avg >= 90):
//         return 'A';
//       case ( avg >= 80):
//         return 'B';
//       case ( avg >= 70):
//         return 'C';
//       case ( avg >= 60):
//         return 'D'; 
//       default:
//         return 'F';   
//     }
//    }

// const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
// const sum    = (sum, item)  => sum + item;
// const mean   = (...numbers) => numbers.reduce(sum, 0) / numbers.length;

// function getGrade () {
//   const score = mean(...arguments);
  
//   for (key in grades) {
//     if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
//     if (score >= grades[key]) return key; 
//   }
// }

var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

console.log(getGrade(95, 90, 93))