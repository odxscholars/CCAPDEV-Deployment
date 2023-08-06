const http = require(`http`);
const dotenv = require(`dotenv`);
const fs = require(`fs`);
const url = require(`url`);
const bodyParser = require("body-parser");
const express = require("express");
const db = require("./models/db.js");
const User = require('./models/UserModel.js');
const Post = require('./models/PostModel.js');
const Comment = require('./models/CommentModel.js');
const routes = require("./routes.js");
const hbs = require("hbs");
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "hbs");

const store = new MongoStore({
    mongoUrl: "mongodb+srv://mezlababidi:zU5dKLCvkSBCOta9@world.risleqn.mongodb.net/?retryWrites=true&w=majority",
    collection: 'sessions',

});

app.use(session({
    secret: 'UserKey',
    resave: false,
    saveUninitialized: false,

    store: store

}));

app.use('/', routes);




db.connect();
app.listen(port, () => {
    console.log("Server is running on port" + port);
    console.log("Server is running on hostname" + hostname);
    console.log("link: http://" + hostname + ":" + port + "/");

});

