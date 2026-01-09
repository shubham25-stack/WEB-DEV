import express from "express";
const app = express();

app.set("view engine", "ejs");
app.get("/",function(req,res){
    res.render("index");
})

app.listen(3000, ()=>{
    console.log("Server is started");
});