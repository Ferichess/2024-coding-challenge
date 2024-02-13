// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
// wpu coding challenge
// 4/336

// const smash = (words) => {
//     return words.join(' ');
//  };

// const smash = words => words.join(' ');

// function smash (words) {
//     "use strict";
//     var smashed = '';
//     for(var i = 0; i<words.length; i++) {
//       smashed += words[i];
//       if(i!=words.length-1) {
//         smashed += ' ';
//       }
//     }
//     return smashed;
// };

// function smash (words) {
//     "use strict";
//     return words.join(" ").trim();   
// };

// function smash1 (words){
//     return words.length != 0 ? words.reduce((res,v) =>  res+= ` ${v}`) : ''
//   };
//   function smash2 (words) {
//     return words.join(' ')  
//   };
//   function smash(words){
//     let result = '';
//     for(let i = 0;i < words.length; i++){
//       if(i == 0){//this is made so there is no space at start
//         result = result + words[i]
//       }else{
//         result = result + ' ' + words[i]
//       }
//     }
//     return result
//   };

const smash = (word) => {
    let result = '';

    for (let i = 0; i < word.length; i++) {
        result += word[i];
        if (i !== word.length - 1) {
            result += ' ';
        }
    }

    return result;
}

 console.log(smash(["this", "is", "a", "really", "long", "sentence"]))