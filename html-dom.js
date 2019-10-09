function myFunction() {
    var btn = document.getElementsByTagName('button')[0];
    var h1 = document.getElementsByTagName('h1')[0];
    var type = document.createAttribute('class');
    type.value = 'red';
    h1.attributes.setNamedItem(type);
}

var node = document.createElement('li');
var textNode = document.createTextNode('Water');
node.appendChild(textNode);

document.getElementById('myList').appendChild(node);