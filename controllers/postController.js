const db = require("../models/db");

const User = require("../models/UserModel.js");
const Post = require("../models/PostModel.js");

const postController = {
    getPost: async function (req, res) {
        console.log(req.params.username);
        var query = {username: req.params.username};

        var projection = 'username email'

        var result = await db.findOne(User, query, projection);
        console.log("result is " + result)
        if(result != null){
            var details = {
                username : result.username,
                email : result.email
            };
            res.render('post',details);
        }
        else{
            res.render('error');
        }

    },
    postPost: async function (req, res){
        console.log(req.body);
        const postUser = req.body.username;
        const postTitle = req.body.newpost_Title;
        const postDescription = req.body.description;
        const postImage = req.body.postImage;
        console.log(postUser);
        console.log(postTitle);
        console.log(postDescription);

        var post = {
            PostUser: postUser,
            PostTitle: postTitle,
            PostDescription: postDescription,
            PostImage: postImage
        }

        var response = db.insertOne(Post, post);
        if (response != null){
            res.redirect("/profile/" + postUser);
        }else{
            res.render("error")
        }
    }
}
module.exports = postController;