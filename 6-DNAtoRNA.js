// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
// wpu coding challenge
// 6/336

// const DNAtoRNA = (dna) => {
//     return dna.replace(/T/g, 'U')
// }

// const DNAtoRNA = (dna) => {
//     let rna = ''
//     for(let i = 0; i < dna.length; i++) {
//         if(dna[i] === 'T') {
//             rna += 'U'
//         } else {
//             rna += dna[i]
//         }
//     }
//     return rna
// }
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
//   }

// function DNAtoRNA(dna) {
//     return dna.replaceAll('T','U');
//   }

// const DNAtoRNA = (dna) => [...dna].map(el => el === 'T' ? el='U': el).join``

// const DNAtoRNA = (dna) => dna.split('').map( i =>  i == 'T' ? i = 'U' : i).join('');

// const DNAtoRNA = (dna) =>{
//   return dna
//     .split("")
//     .map( fn = (rna) => {
//       return rna.replace("T", "U");
//     })
//     .join("");
// }

// const DNAtoRNA = dna => dna.split('T').join('U')

// const DNAtoRNA = (dna) => {
//     return dna.split('').map(el => el === 'T' ? 'U' : el).join('');
// }

// console.log(DNAtoRNA("TTTT"));
// console.log(DNAtoRNA("GCAT"));
