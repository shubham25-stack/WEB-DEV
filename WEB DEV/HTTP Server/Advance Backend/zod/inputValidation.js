const zod = require("zod");


//if thus us an array of numbers with some specification return false and all
function validInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string.min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login",function(req,res){
    const response = validInput(req.body)
    res.json({
        msg: "Your input are invalid"
    })
    return;
})