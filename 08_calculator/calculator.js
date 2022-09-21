const add = function(...arr) {
	let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const subtract = function(...arr) {
	return arr[0] -  arr[1];
};

const sum = function(arr) {
	let ans = 0;
  if (arr.length === 0) {
    return ans;
  } else if(arr.length === 1) {
    ans = arr[0];
  } else { 
    for(let i = 0; i < arr.length; i++) {
      ans = ans + arr[i];
    }
  }
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  
    for(let i = 0; i < arr.length; i++) {
      ans = ans * arr[i];
    }
  
  return ans;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	// Do this recursively.
  /*if (n <= 1) {
    return 1;
  } else {
    return n * (arguments.callee(n - 1));
  }*/

  // Do it all in one line
  return ((n == 1 || n == 0) ? 1 : n * arguments.callee(n - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
