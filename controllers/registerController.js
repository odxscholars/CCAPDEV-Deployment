const db = require("../models/db");

const User = require("../models/UserModel.js");

const bcrypt = require("bcrypt");
const registerController = {
    getRegister: function(req, res){
        // var details = {};
        //  if(req.session != null){
        //      details.flag = true;
        //      details.name = req.session.username;
        //      details.email = req.session.email;
        //  }
        //  else{
        //      details.flag = false;
        //
        //  }
        res.render("register")
        //res.render("register", details);
    },

    postRegister: async function(req, res){
        const username = req.body.uName;
        const email = req.body.emailInput;
        const password = req.body.pwInput;

        bcrypt.hash(password, 10, function(err, hash){
            var user = {
                username: username,
                email: email,
                password: hash

            }
            console.log(hash)

            db.insertOne(User, user, function(flag){
                if(flag){
                    res.render("profile/" + username);
                }else{
                    res.render("error");
                }
            });

        })

    },
    checkUsername : async function(req, res){
        console.log("checking username");
        var username = req.query.username;
        var query = {username: username};
        var projection = 'username';
        var result = await db.findOne(User, query, projection);
        console.log(result);
        if(result != null){
            res.send(result);
        }else{
            res.send(result);
        }
    },

    checkEmail : async function(req, res){

        var email = req.query.email;
        var query = {email: email};
        var projection = 'email';
        var result = await db.findOne(User, query, projection);
        if(result != null){
            res.send(result);
        }else{
            res.send(result);
        }

    }






}
module.exports = registerController;