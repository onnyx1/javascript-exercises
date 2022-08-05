const palindromes = function (phrase) {
const newWord = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ? " "]/g,"").toLowerCase();
console.log(newWord);
console.log(Array.from(newWord).reverse().join(""));
return Array.from(newWord).reverse().join("") === newWord;
};

// Do not edit below this line
module.exports = palindromes;
