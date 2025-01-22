const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/health-chekup", function(req,res){
    //kidneys = [1,2,3,4]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You had " + kidneyLength + " Kidneys");
})

//global catches -: it is like as error handeling in backend...
app.use(function(err,req,res,next){
    res.json({
        msg: "Sorry something will happen in out server"
    })
})

app.listen(port);