//Parse int function

function ParseInt(value){
    console.log("Original value: ", value);
    let result =  parseInt(value);
    console.log("After parseInt: ",result);
}

console.log(ParseInt("56")) ;
console.log(ParseInt("96ps"));
console.log(ParseInt("4.6"));