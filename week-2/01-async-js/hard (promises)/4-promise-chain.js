/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000); // Resolve after t seconds
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000); // Resolve after t seconds
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000); // Resolve after t seconds
    });
}


// function calculateTime(t1, t2, t3) {
//     let start = Date.now();
//     return wait1(t1).then(() => {
//        return wait2(t2).then(() => {
//             return wait3(t3).then(() => {
//                 let end = Date.now();
//                 return end - start; // This return statement does not return from calculateTime
//             })
//         })
//     });
// }

//!upper one is mine but not a good way to write down one is better example 

function calculateTime(t1, t2, t3) {
    let start = Date.now();

    // Chain promises sequentially and return the final calculated time
    return wait1(t1)
        .then(() => {
            return wait2(t2);
        })
        .then(() => {
            return wait3(t3);
        })
        .then(() => {
            let end = Date.now();
            return end - start; // Return the total time taken in milliseconds
        });
}



module.exports = calculateTime;
