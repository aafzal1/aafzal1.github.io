
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Asna";
var letterColors = [red, purple, blue];

var bubbleShape;

if(10 < 3)
{
    bubbleShape = "square";
}
else 
{
    bubbleShape = "circle";   
}

document.write("Before drawName in main.js\n")

drawName(myName, letterColors);
bounceBubbles();
document.write("After bounce bubbles\n")
