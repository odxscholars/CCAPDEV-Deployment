const mongoose = require('mongoose');
const Post = require('../models/PostModel.js')
const db = require("../models/db");
const User = require("../models/UserModel.js");

const userController = {
    getUser: async function (req, res) {
        console.log(req.params.username);
        var query = {username: req.params.username};

        var projection = 'username email'

        var result = await db.findOne(User, query, projection);
        console.log("result is " + result);

        if (result != null) {
            var proj = 'PostUser PostTitle PostDescription PostImage PostTime'
            var posts = await db.findMany(Post, query, proj);

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

            res.render('user', { userdataset: userDetails });
        } else {
            res.render('error');
        }
    }
}

module.exports = userController;
