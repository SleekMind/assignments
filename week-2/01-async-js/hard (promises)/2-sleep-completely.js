/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
//using setTime out thread won't be busy.. it will continue doing other work soo we have to use synchronous task
function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        let start = new Date();
        while(Date.now() - start <= milliseconds){
            // busy loop
        }
        resolve();
    })
}

module.exports = sleep;
