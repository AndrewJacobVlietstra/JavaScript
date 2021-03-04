var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setUp (width, height) {
    centerX = width / 2;
    centerY = height / 2; //manipulate global variables in this function and use them later on down the file
}

function computeDistance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var d2 = (dx * dx) + (dy * dy);
    var d = Math.sqrt(d2);
    return d; //returning some value called d, if didnt return the function would return undefined
}

function circleArea(r) {
    var area = Math.PI * (r ** 2);
    return area;
}

setUp(width, height);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);

console.log("Area: " + area);
console.log("Distance: " + distance);