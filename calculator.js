//jshint esversion:6

const express = require("express");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",  function(req, res){
    res.send("thanks for psoting this");
})

app.listen(3000, function(){
    console.log("server is running on port 3000")
});