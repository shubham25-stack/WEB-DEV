//asynchronus function call
// const fs = require("fs"); //fs -: file system
// function putCopyWriteToFile(){
// fs.readFile("b.txt","utf-8", (err, data) => {
//     data = data + "Hello guys this sentance is added externally";
//     console.log(data);
//     fs.write("b.txt",function() {
//         cb();
//     })
// })
// }

// putCopyWriteToFile(function(){
//     console.log("sentance is added")
// })

//own created async function this is an dumb things
/*function ownSetTime(fn,d){
    setTimeout(fn,d);
}

ownSetTime(function(){
    console.log("Hi there");
},2000)

console.log("Hi Guys");*/  //this was the dumb thing 


// function onDone(){
//     console.log("Hello");
// }
// function count(onDone){
//     for(let i=0; i<=10; i++){
//         console.log(i);
//     }
// }
// setTimeout(count,3000);
// console.log("Hello Duniya");

//promises
function promiseFied(duration){ //promisified my own timeout function
    const p = new promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    })
}

//promise calling 
const ans = promiseFied(1000);
    ans.then(function(){
        console.log("Timeout is done");
    }
);

//fs-read file promisified
const fs = require("fs"); //fs -: file system
fs.readFile("b.txt","utf-8").then(function(data){
    
})
.catch(function(err){

})

function myFunction(){
    const p = new Promise(function(resolve){
      resolve("My own value");  
    })
    return p
}

function myFunction(){
    return "My own value2222"
}
// .then()

//some extrea things
function returnSomething(){
    for(let i = 0; i<10000; i++){ //this will return synchronos thin gs
        

    }
    return "10" ; //return resolve value
}