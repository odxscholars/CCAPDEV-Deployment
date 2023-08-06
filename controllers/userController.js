const mongoose = require('mongoose');
const Post = require('../models/PostModel.js')
const db = require("../models/db");
const User = require("../models/UserModel.js");

const userController = {
    getUser: async function (req, res) {
        console.log(req.params.username);
        console.log("went here")

        var query = { username: req.params.username };
        var postQuery = { PostUser: req.params.username }; // Use the logged-in user's username
        var projection = 'username email';

        var result = await db.findOne(User, query, projection);
        var proj = 'PostUser PostTitle PostDescription PostImage PostTime';

        if (result != null) {
            console.log(result)
            var posts = await db.findMany(Post, postQuery, proj);

            var postDetails = posts.map(post => ({
                PostUser: post.PostUser,
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
            res.render('user', userDetails);
        }else{
            console.log("went here2")
        }
    }
}

module.exports = userController;

