//revision next class as 2nd class .js

const express = require("express");
const app = express();
const port = 3000;
// cathching the query parameter

function sum(n){
    let ans = 0;
    for(let i = 1; i<n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get("/", function(req,res){
    console.log("Rquest recieved to the server");
    //taking input from end user at website
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hello Guys welcome to the new world. \n your answer is: "+ans);
})

app.listen(port);