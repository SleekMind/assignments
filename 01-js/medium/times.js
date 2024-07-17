/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


    
    let startTime = new Date();
    let sum = 0;
    for (let i = 0; i < 100; i++){
        sum = sum + i;
    }

    let endTime = new Date();

    console.log(`For 1 to 100 ${endTime - startTime}ms`);

     startTime = new Date();
     sum = 0;
    for (let i = 0; i < 100000; i++){
        sum = sum + i;
    }

     endTime = new Date();

    console.log(`For 1 to 1000000000 ${endTime - startTime}ms`);

    startTime = new Date();
     sum = 0;
    for (let i = 0; i < 1000000000; i++){
        sum = sum + i;
    }

     endTime = new Date();

    console.log(`For 1 to 1000000000100 ${endTime - startTime}ms`);
