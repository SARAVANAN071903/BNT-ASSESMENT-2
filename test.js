//maxmimum character
let str="aabbccddddd";
let count=0;
let maxChar='';
for(let i=0;i<str.length;i++){
    let charCount=0;
    for(let j=0;j<str.length;j++){
        if(str[i]===str[j]){
            charCount++;
            maxChar=str[i];
        }
    }
    if(charCount>count){
        count=charCount;   
    }
    
}
console.log(maxChar)

//remove duplicate elements from an array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 5, 6, 7];
let arr3 = arr1.concat(arr2);

let Arr = [...new Set(arr3)];
console.log(Arr);

//chainable function 

function chain(value) {
    return {
        add(n) {
            value += n;
            return this;
        },
        subtract(n) {
            value -= n;
            return this;
        },
        result() {
            return value;
        }
    };
}
console.log(chain(5).add(2).subtract(1).result());


//hoisting in JavaScript

function named(a, b) {
    console.log("This is a named function");
  return a + b;
}
console.log(named(1, 2)); // Working in named function

console.log("Not work for arrow function");


// const arrow = (a,b) =>{
//     return a+b
// }
// console.log(arrow(1,2))   

//longest word in a string
let sentence = "JavaScript is powerful";
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  words.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord(sentence));