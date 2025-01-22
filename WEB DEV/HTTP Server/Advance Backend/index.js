const express = require("express");
const app = express();
const port = 3000;

//uglly way or noob way to do the work authentication
app.get("/health-checkup", function(req,res){
    console.log("Request recieved to the server");

    const username =  req.header.username;
    const password = req.header.password;
    const kidneyID = req.query.kidneyID;

    // if(username === "Shiv" && password ==="pass"){
    //     if(kidneyID == 1 || kidneyID == 2){
    //     res.json({
    //         msg:"Your kidney is fine!"
    //     })
    // }
    // }

    // res.status(400).json({"msg": "Somethings up with your inputs"})

    //another ugly way is:

    if(username !== "Shiv" || password !="pass"){
        res.status(400).json({"msg" : "somethin up with your body"})
        return
    }

    if(kidneyID != 1 && kidneyID != 2){
        res.status(400).json({"msg" : "somethin up with your body"})
        return
    }
})

app.listen(port);