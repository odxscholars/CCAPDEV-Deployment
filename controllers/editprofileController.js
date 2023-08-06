const db = require("../models/db");

const User = require("../models/UserModel.js");

const editprofileController = {
    getEditname: function(req, res){
        res.render("editname")
    },

    postEditname: async function(req, res){
        const username = req.body.uName;

        var query = {username: req.params.username};

        var result = await db.updateOne(User, query, username, function(flag){
            if(flag){
                res.render("success");
            }else{
                res.render("error");
            }
        });
    },

    getEditemail: function(req, res){
        res.render("editemail")
    },

    postEditemail: async function(req, res){
        const email = req.body.emailInput;

        // var query = {username: req.params.username};

        var result = await db.updateOne(User, query, username, function(flag){
            if(flag){
                res.render("success");
            }else{
                res.render("error");
            }
        });
    },

    getEditpassword: function(req, res){
        res.render("editpassword")
    },

    postEditpassword: async function(req, res){
        const password = req.body.pwInput;

        // var query = {username: req.params.username};

        var result = await db.updateOne(User, query, username, function(flag){
            if(flag){
                res.render("success");
            }else{
                res.render("error");
            }
        });
    }
}

module.exports = editprofileController;