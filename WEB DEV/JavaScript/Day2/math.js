function mathMethods(value){
    console.log("Original Value : ",value);

    let rounded = Math.round(value);
        console.log("After round():",rounded);

    let ceiling = Math.ceil(value);
        console.log("After ceil(): ",ceiling);
    
    let flooring = Math.floor(value);
    console.log("After flooring():",flooring);

    let randomValue = Math.random(value);
    console.log("After random():",randomValue);

    let maxValue = Math.max(5,8,3);
    console.log("After max():",maxValue);

    let minValue = Math.min(6,8,90);
    console.log("After min():",minValue);

    let powerOfTwo = Math.pow(value,2);
    console.log("After power():",powerOfTwo);

    let squareRoot = Math.sqrl(value);
    console.log("After sqrt():",squareRoot);


}