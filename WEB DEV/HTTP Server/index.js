const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = 3000

//extra
console.log(typeof app);
class NewClass {
    constructor(){

    }
}
const obj = new NewClass();
console.log(typeof obj);//this was the class and also extrea things


//middlewares
app.use(bodyParser.json());
app.post('/backend-api/conversation',(req,res) => {
    const message = req.body.message;
    console.log(message);
    res.json({
        output: "2 + 6 = 8"
    })
})

//making header
app.get("/route-handler",function(req,res){
    res.json({
        name:"Shiv",
        age:"20"
    })
})


//similar to fs.read file
app.get('/', function(req, res) {  //add function to remove arrow : app.get('/',(req, res) => {

    let a = 0;
    console.log("Recieved the request");
    // for(let i = 0; i<10000000; i++){
    //     a = a + i;
    // }
  res.send('<b>Welcome to the new programing world </b>!')
})

app.listen(port)
//another method of listen
// app.listen(port, () =>{
//     console.log(`exaample app listening on port ${port}`)
// })


//fetch -: fetch data from somewhere -: BY URL

//how to send status code
app.get('/', function(req, res) {  //add function to remove arrow : app.get('/',(req, res) => {

    console.log(req.header.authorization);
    setTimeout(function(){
        res.status(401).send('Hello world!')
    }, 1000)
})