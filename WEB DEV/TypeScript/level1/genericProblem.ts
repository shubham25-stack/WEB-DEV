type Input = number | string;

function firstEl(arr: Input[]){
    return arr[0];
}

// const value = firstEl(["Shiv", "Thakur"]);
// console.log(value.toUpperCase());

//another problem 
//if numbers or if a strung not having the mix array 
//either the number array and string array

type Input2 = number | string;

function secondEl(arr:string[] | number[]){
    return arr[0];
}
const value = secondEl(["Ankush"]);
value.toUpperCase();
