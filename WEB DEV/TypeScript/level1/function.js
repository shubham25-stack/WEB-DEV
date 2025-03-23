"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    //do something
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Left);
doSomething(Direction.Right);
console.log(Direction.Down);
console.log(Direction.Up);
