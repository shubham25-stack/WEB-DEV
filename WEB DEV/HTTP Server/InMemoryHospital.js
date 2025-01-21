//question is lets create an in memory hospital.
//you need to create 4 routes (4things that hospital can do)
//1.GET -: User can check how many kidney they have.
//2.POST -: user can add new kidney.
//3.PUT -: user can replace their kidneys
//4 DELETE -: User can delete their kidneys..


const express = require("express");
const app = express();
const port = 3000;

var users = [{
    name:"rock",
    kidneys: [{
        healthy:false
    }]
}];

app.get("/", function(req,res){
    //write logic to return how many kidneys they have..
    const rockKidneys = users[0].kidneys;
    const nofKidneys = rockKidneys.length;
    let nofhealthyKidneys = 0;
    for(let i =0; i<rockKidneys.length; i++){
        if(rockKidneys[i].healthy){
            nofhealthyKidneys = nofhealthyKidneys + 1;
        }
    }

    const nofUnhealthyKidney = nofKidneys - nofhealthyKidneys;
    res.json({
        nofKidneys,
        nofhealthyKidneys,
        nofUnhealthyKidney
    })

})

app.post("/", function(req,res){
    //user can add their kidneys you send the data to the body
    const n = req.query.n;
    console.log(req.body);
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){
    //user can replace the kidneys
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})
app.delete("/", function(req,res){
    //when they has no kidneys then on this request we had to
    // let atleastOneKidney = false;
    // for(let i =0; i<users[0].kidneys.length; i++){
    //     if(!users[0].kidneys[i].healthy){
    //         atleastOneKidney = true;
    //     }
    // }
    if(isThereAtLeastOneUnhealthyKidneys()){

    //when pressed delete button it removes all the unhealthy kidneys..
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys.healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({
        msg: "Done! removed."
    })
} else{
    res.sendStatus(411);
}
})

function isThereAtLeastOneUnhealthyKidneys(){
    let atleastOneUnhealthyKidney = false;
    for(let i =0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(port);

//task is check always properly through postman 
