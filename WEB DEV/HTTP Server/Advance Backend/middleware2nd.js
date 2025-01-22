const express = require("express");
const app = express();
const port = 3000;

let numberofRequest = 0; //checking the requests recieved by using middleware function.
function calculatedRequest(req,res,next){
    numberofRequest++;
    console.log(numberofRequest);
    next();
}
app.use(express.json()) // we use this for post to extract data from body

app.post("/health-checkup",function(req,res){
    console.log(req.body);

    res.json({
        msg: "Hi there"
    })
});

app.get("/health-checkup2",function(req,res){

})

app.listen(port);