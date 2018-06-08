//Global Variables
var username = "";
var userCreated = false;

var HTTP_PORT = process.env.PORT || 8080;

var data_service = require("./data-service.js");
var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({extended: true})); //use body-parser
app.use(express.static(path.join(__dirname, "/public")));  //allow use of public static resources
app.use(express.static(path.join(__dirname, "/views")));
app.use(express.static(path.join(__dirname, "/node_modules")));

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/signup.ejs"), {confirmation: userCreated, username: username});
    
    //reset global variables
    userCreated = false;
    username = "";
});

app.post("/create-user", (req, res) => {

    console.log("User signup form submitted...")

    //capture form data
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        vpassword: req.body.vpassword
    }
    
    //Generate username only after validation
    data_service.userIsValid(data).then((data) => {
        //generate username
        username = data_service.generateUsername();
        //set flag
        userCreated = true;
        console.log(data);
        console.log("User created.");
    }).catch((reason) => {
        console.log(reason);
    });

    res.redirect("/");
});

app.listen(HTTP_PORT, () => {
    console.log("Server started! Listening on port " + HTTP_PORT);
});