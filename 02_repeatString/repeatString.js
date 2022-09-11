const repeatString = function(heyString, num) {
    if(num > 0 && heyString != ""){
        for(let i = 1; i < num; i++) {
            heyString = heyString + "hey";
        }
        return heyString;
    } else if (num == 0) {
        return "";
    } else if (heyString === '') {
        return "";
    } else {
        return "ERROR";
    }
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
