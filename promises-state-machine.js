// Since a promise is just a state machine, we should start by considering the state information we will need later.
let PENDING = 0;
let FULFILLED = 1;
let REJECTED = 2;

// STATE MACHINE
function Promise(fn) {
    // store state which can be pending, fulfilled or rejected
    let state = PENDING;

    // store value or error once FULFILLED or rejected
    let value = null;

    // store success & failure handler attached by calling .then or .done
    let handlers = [];

    // TRANSITION
    // Next, lets consider the two key transitions that can occur, fulfilling and rejecting:
    function fulfill(result) {
        state = FULFILLED;
        value = result;
        handlers.forEach(handle);
        handlers = null;
    }

    function reject(error) {
        state = REJECTED;
        value = error;
        handlers.forEach(handle);
        handlers = null;
    }

    // That gives us the basic low level transitions, but lets consider an extra, higher-level transition called resolve
    function resolve(result) {
        try {
            let then = getThen(result);
            if (then) {
                doResolve(then.bind(result), resolve, reject);
                return;
            }
            fulfill(result);
        } catch (e) {
            reject(e);
        }
    }

    function handle(handler) {
        if (state === PENDING) {
            handlers.push(handler);
        } else {
            if (state === FULFILLED &&
                typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(value);
            }
            if (state === REJECTED &&
                typeof handler.onRejected === 'function') {
                handler.onRejected(value);
            }
        }
    }

    this.done = function (onFulfilled, onRejected) {
        // ensure we are always asynchronous
        setTimeout(function () {
            handle({
                onFulfilled: onFulfilled,
                onRejected: onRejected
            });
        }, 0);
    }
    doResolve(fn, resolve, reject);
}

/**
 * Check if a value is a Promise and, if it is,
 * return the `then` method of that promise.
 *
 * param {Promise|Any} value
 * return {Function|Null}
 */
function getThen(value) {
    let type = typeof  value;
    if (value && (type === 'object' || type === 'function')) {
        let then = value.then;
        if (typeof then === 'function') {
            return then;
        }
    };
    return null;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 *
 * param {Function} fn A resolver function that may not be trusted
 * param {Function} onFulfilled
 * param {Function} onRejected
 */
function doResolve(fn, onFulfilled, onRejected) {
    let done = false;
    try {
        fn(function (value) {
            if (done) return;
            done = true;
            onFulfilled(value);
        }, function (reason) {
            if (done) return;
            done = true;
            onRejected(reason);
        })
    } catch (err) {
        if (done) return;
        done = true;
        onRejected(err);
    }
}