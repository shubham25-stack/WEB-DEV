class Car{
    constructor(name,wheels,model,color){
        this.name = name;
        this.wheels = wheels;
        this.model = model;
        this.color = color;
    }
    static myType() {
        console.log("Car")
    }
    color(){
        console.log("the colour is : " + this.color);
    }
    name(){

    }
    wheels(){

    }
    model(){

    }

}

let swift = new Car("Swift" , 4 , "b5", "red");
let lambo = new Car("lambo" , 4 , "b6", "black");




//static method 
// static myType{
//     console.log("Car")
// }