//own synchronous function
const fs = require('fs');

function shivReadFile(){
    return new Promise(function(resolve){
        console.log("Inside promises");
        fs.readFile("a.txt","utf-8", function(err, data){
            console.log("before promise");
            resolve(data);
        });
    })
}

//calback function to call
function onDone(data){
    console.log(data)
}

shivReadFile().then(onDone); 