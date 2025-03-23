"use strict";
const app = express();
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["success"] = 200] = "success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/", (req, res) => {
    if (!req.query.userId) {
        res.status(ResponseStatus.NotFound).json({});
    }
    // and so on...
    res.json({});
});
