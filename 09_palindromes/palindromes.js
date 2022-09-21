const palindromes = function (str) {
    // Format string to pass tests
    str = removePunctuation(str);
    str = str.split(" ").join("");
    str = str.toLowerCase();
    console.log(str);

    return str === str.split("").reverse().join("");
};

let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function removePunctuation(string) {
    return string
        .split('')
        .filter(function(letter) {
            return punctuation.indexOf(letter) === -1;
        })
        .join('');

}
// Do not edit below this line
module.exports = palindromes;
