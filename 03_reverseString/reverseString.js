const reverseString = function(myString) {
    let temp = "";
    for(let i = myString.length; i >= 0; i--) {
        temp = temp + myString.charAt(i);
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;
