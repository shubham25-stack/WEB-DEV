type KeyInput = "up" | "down" | "left" | "right";

 enum Direction{ //using enum over the type
    Up, //0
    Down, //1
    Left, //2
    Right //3
 }

function doSomething(keyPressed: Direction){
    //do something
    if(keyPressed == Direction.Up){

    }
}

doSomething(Direction.Left);
doSomething(Direction.Right);
console.log(Direction.Down);
console.log(Direction.Up);