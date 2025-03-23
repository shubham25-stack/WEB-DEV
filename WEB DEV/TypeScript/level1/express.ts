const app = express();

enum ResponseStatus {
    success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req,res) =>{
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json({})
    }
    // and so on...
    res.json({});
})