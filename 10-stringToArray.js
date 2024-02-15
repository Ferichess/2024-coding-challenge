// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
// wpu coding challenge
// 10/336


// const stringToArray = (str) => str.split(" ")

function stringToArray(string){
    var result = [];
    var traverse = function foo(string){
        for(var i=0;i<string.length;i++){
            var chr = string.charAt(i);
            if(chr === " "){
                result.push(string.slice(0,i));
                foo(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    traverse(string);
    return result;
}



console.log(stringToArray("Robin Singh"))
console.log(stringToArray("I love arrays they are my favorite"))
console.log(stringToArray(""))
