/* ========================

 Call, apply, bind is prototype of Functions.

 */


// bind

function log(level, time, message) {
    console.log(level + ' ' + time + ': ' + message);
}

let logErrToday = log.bind(null, 'Error', 'Today');

logErrToday('Server Die');
