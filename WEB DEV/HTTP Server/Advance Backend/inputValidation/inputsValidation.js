const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/health-chekup", function(req,res){
    //kidneys = [1,2,3,4]
    const kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            msg: "Wrong inputs"
        })
    }
    
    const kidneyLength = kidneys.length;

    res.send("You had " + kidneyLength + " Kidneys");
})

app.listen(port);