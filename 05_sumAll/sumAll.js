const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if(typeof(num1) != 'number' || typeof(num2) != 'number') {
        return "ERROR";
    } else if (num1 < num2){
        return add(num1, num2);
    } else if (num1 > num2) {
        return add(num2, num1);
    } else {
        return "ERROR";
    }
};

function add(num1, num2) {
    let answer = 0;
    for(i = num1; i <= num2; i++) {
        answer = answer + i;
    }
    console.log(`Answer = ${answer}`);
    return answer;
}
// Do not edit below this line
module.exports = sumAll;
