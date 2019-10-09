/* refer: https://www.tutorialspoint.com/es6/es6_promises.htm */

/* === synchronous callback ===*/

// function notifyAll(fnSms, fnEmail) {
//     console.log('starting notification process');
//     fnSms();
//     fnEmail();
// }
// notifyAll(
//     function() {
//         console.log('Sms send ...')
//     },
//     function() {
//         console.log('email send ...')
//     }
// );
// console.log('End of script');

/* === asynchronous callback === */

function notifyAll(fnSms, fnEmail) {
    setTimeout(function() {
        console.log('starting notification process');
        fnSms();
        fnEmail();
    }, 2000);
}
notifyAll(
    function() {
        console.log('Sms send ...')
    },
    function() {
        console.log('email send ...')
    }
);
console.log('End of script');


/* === promise === */
