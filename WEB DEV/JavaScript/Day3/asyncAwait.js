const { promises } = require("dns");
const { promiseHooks } = require("v8");

function shivAsynFunction(){
    let p = new promise(function(resolve){
        resolve("Hi world")
    });
    return p;
}

async function main(){
    let value = await shivAsynFunction();
    console.log(values);
}

main();