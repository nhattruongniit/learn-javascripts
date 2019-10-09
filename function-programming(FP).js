var myContainer = "Hello";

var log = function(someVariable) {
    console.log(someVariable);
    return someVariable;
}

var doSomeThing = function(thing) {
    thing();
}

var sayBigDeal = function() {
    var message = "say big deal";
    log(message);
}

doSomeThing(sayBigDeal);

/*!Add Color =========================*/

var arrayColor = ['red', 'orange', 'blue', 'green', 'yellow', 'purple'];

function addColor(color) {
    var rainbowEl = document.getElementById('rainbow');
    var div = document.createElement('div');
    div.style.paddingTop = '10px';
    div.style.background = color;
    rainbowEl.appendChild(div);
}

function forEach(callback, array) {
    for (var i = 0; i < array.length; i = i + 1) {
        callback(array[i], i);
    }
}

forEach(addColor, arrayColor);

//arrayColor.forEach(addColor);

var reduce = function(callback, initialValue, array) {
    var working = initialValue;
    for (var i = 0; i < array.length; i = i + 1) {
        working = callback(working, array[i]);
    }
    return working;
};

var map = function(callback, array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        newArray[i] = callback(array[i], i);
    }
    return newArray;
}

var ponies = [
    [
        ['name', 'Fluttershy'],
        ['image', 'http://tinyurl.com/gpbnlf6'],
        ['description', 'Fluttershy is a female Pegasus pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Applejack'],
        ['image', 'http://tinyurl.com/gkur8a6'],
        ['description', 'Applejack is a female Earth pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Twilight Sparkle'],
        ['image', 'http://tinyurl.com/hj877vs'],
        ['description', 'Twilight Sparkle is the primary main character of My Little Pony Friendship is Magic.']
    ]
]

function addToObject(obj, arr) {
    obj[arr[0]] = arr[1];

    return obj;
}

function ponyArrayToObject(ponyArray) {
    return reduce(addToObject, {}, ponyArray);
}

var tidyPonies = map(ponyArrayToObject, ponies);

console.log(tidyPonies);