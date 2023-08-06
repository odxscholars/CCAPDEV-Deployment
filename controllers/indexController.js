const db = require("../models/db");

const User = require("../models/UserModel.js");
const Post = require("../models/PostModel.js");
const indexController = {
    getIndex: function (req, res) {
        //get all posts from all users
        var query = {};
        var result =  db.findMany(Post, query, "")
        .then(function(result){
            var details = {
                posts: result
            }
            console.log(details)
            res.render("index", details);
        })

        // if(req.session.username){
        //      res.redirect('/profile/' + req.session.username);
        //  }
        //  else{
        //      details = {
        //          flag: false
        //      };
        //      res.render("index", details);
        //  }
    }
}

module.exports = indexController