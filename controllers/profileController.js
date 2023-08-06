const db = require("../models/db");

const User = require("../models/UserModel.js");
const Post = require("../models/PostModel.js");

const profileController = {
    getProfile: async function (req, res) {
        console.log(req.params.username);
        var query = {username: req.params.username};
        var postQuery = {PostUser: req.params.username};
        var projection = 'username email'

        var result = await db.findOne(User, query, projection);
        var proj = 'PostUser PostTitle PostDescription PostImage PostTime'
        var posts = await db.findMany(Post, postQuery, proj);
        if (result != null) {
            var postDetails = posts.map(post => ({
                PostTitle: post.PostTitle,
                PostTime: post.PostTime,
                PostDescription: post.PostDescription
            }));

            var userDetails = {
                username: result.username,
                email: result.email,
                posts: postDetails
            };
            console.log(userDetails);
            res.render('profile',userDetails);
        }

    },
    postProfile: async function (req, res){
        console.log(req.body);
        const postUser = username;
        const postTitle = req.body.newpost_Title;
        const postDescription = req.body.description;
        console.log(postUser);
        console.log(postTitle);
        console.log(postDescription);

        var post = {
            PostUser: postUser,
            PostTitle: postTitle,
            PostDescription: postDescription
        }

        var response = db.insertOne(Post, post);
        if (response != null){
            res.redirect("/profile?username=" + username);
        }else{
            res.render("error")
        }
    }
}
module.exports = profileController;