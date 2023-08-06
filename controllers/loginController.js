const db = require("../models/db");

const User = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const loginController = {
    getLogin: function(req, res){
        res.render("login");
        // if(req.session.username){
        //     res.redirect('/profile/' + req.session.username);
        // }
        // else{
        //     details = {
        //         flag: false
        //     };
        //     res.render("login", details);
        // }

    },

    postLogin: async function(req, res){
        console.log(req.body);

        const email = req.body.emailInput;
        const password = req.body.passwordInput;

        var user = {
            username: null,
            email: email,
            password: password
        }
        var query = {email: email};

        var result = await db.findOne(User, query);
        if (result != null){
            console.log("found")
            bcrypt.compare(password, result.password, function(err, equal){
                if(equal){
                    console.log("password is correct")
                    // req.session.username = result.username;
                    // req.session.email = result.email;
                    res.redirect("/profile/" + result.username);
                }else{
                    var details = {
                        error_code: 404,
                        error: "Password is incorrect"
                    }
                    res.render("error", details);

                }
            })

        }else{
            var details = {
                error_code: 404,
                error: "User does not exist"
            }
            res.render("error", details);
        }


    }


}
module.exports = loginController;