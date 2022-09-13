const removeFromArray = function(...args) {
    let arr = args[0];
    /* Run nexted for loops with first index as array and compare
       each item with rest of items in params array.  When they
       are the same we print match and remove the item. */
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 1; j < args.length; j++) {
            if(arr[i] === args[j]) {
                console.log("match");
                arr.splice(i, 1);
            }
        }
    }

    /* Run the loops in reverse in case numbers to remove are not
       listed in order. */
    for(let i = arr.length; i > 0; i--)
    {
        for(let j = args.length; j > 0; j--) {
            if(arr[i] === args[j]) {
                console.log("match");
                arr.splice(i, 1);
            }
        }
    }

    /* Print contents of new array. */
    console.log("new array");
    for(let i = 0; i < arr.length; i++) {
        console.log(`Position ${i} = ${arr[i]}`);
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
