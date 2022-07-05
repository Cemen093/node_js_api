const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const mongoose = require("mongoose");
const adRouter = require("./routes/adRouter");
const headingRouter = require("./routes/headingRouter");
const regionRouter = require("./routes/regionRouter");
var cors = require('cors')

app.use(cors());

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send(`<p>Hello API</p>`);
})
app.use("/api/heading", headingRouter);
app.use("/api/region", regionRouter)
app.use("/api/NOT_ad", adRouter);
/*?????????????????????????????????????????????????
    ПОЧЕМУ ЗАПРОС /api/ad ВЫБИВАЕТ ОШИБКУ????*/

mongoose.connect("mongodb+srv://Sem:PASSworld93@cluster0.hsevc.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/api`);
    });
});