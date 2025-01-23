const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

// const schema = zod.array(zod.number()); //zod using describe the structure of array
 //for this more thatn one thing to store as:

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(z.number())
 })


app.use(express.json());

app.post("/health-checkup", function(req,res){
    //kidneys [1,2,3]
    const kidneys = req.body.kidneys;
    const resposne = schema.safeParse(kidneys);
    if(!resposne.success){
        res.status(411).json({
            msg:"Input is invalid"
        })
    }

    res.send({
        resposne
    })
});

app.listen(port);