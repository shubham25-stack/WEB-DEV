//creating backend for the authentication and send back the JWT key to the user

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345678";
const app = express();
const port = 3000;

app.use(express.json());

const ALL_USERS =[{ //in memory database
    username:"Shiv@gmail.con",
    password:"1234",
    name: "Shiv Thakur"
},
{
    username:"shivam234@gmail.con",
    password:"7654321",
    name: "Shivam Shingh"
},
{
    username:"kundan123@gmail.con",
    password:"123484",
    name: "kundan kumar"
},
];

function userExists(username, password){
    const userExists = false;
    for(let i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin",function(req , res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesn't exist in out in memory DB",
        });
    }
    var token = jwt.sign({username: username},  jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res){
     //method 1
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtPassword);
    const username = decoded.username;

    res.json({
        user:ALL_USERS.filter(function(value){
            if(value.username == username){
                return false;
            } else {
                return true;
            }
        })
    });

    //method 2
    // try{
    //     const decoded = jwt.verify(token,jwtPassword);
    //     const username = decoded.username;
    // } catch (err) {
    //     return res.status(403).json({
    //         msg:"Invalid input"
    //     });
    // }
})

app.listen(port);