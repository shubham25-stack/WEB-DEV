// setTimeOut function
function findSum(n){
    let ans = 0;
    for(let i = 0; i<n; i++){
        ans = ans + i;
    }
    console.log(ans);
}

function findSumTill100(){
    return findSum(100);
}

setTimeout(findSumTill100, 1000)
console.log("Hello Duniya");

// fs.readFile
const fs = require("fs"); //fs -: file system
fs.readFile("a.txt","utf-8", function(err, data){
    console.log(data);
})
console.log("Hi Guys");

//Fetch asynchronous function
