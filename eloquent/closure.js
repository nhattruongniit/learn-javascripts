function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
console.log(wrap1());


function multiploer(factor) {
    return number => number * factor;
}

let twice = multiploer(2);
console.log(twice(5));