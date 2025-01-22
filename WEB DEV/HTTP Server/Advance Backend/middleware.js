//in middleware function we use req,re, and also next next is nothing just a next function calling

const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req,res,next){ //middleware function for users
    if(username != "Shiv" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect input",
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    if(kidneyID != 1 && kidneyID != 2){
        res.status(403).json({
            msg:"incorrect inputs"
        });
    }
    else{
        next();
    }
};

//midleware are just we used for an authentication

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    console.log("recieved at GET inside health-checkups");
    //do here something with health

    res.send("You are healthy")
})

app.get("/kidney checkup",userMiddleware,kidneyMiddleware,function(req,res){
    console.log("recieved at GET inside kidney checkup");
    //do here something with kidney

    res.send("You are healthy")
})

app.listen(port);