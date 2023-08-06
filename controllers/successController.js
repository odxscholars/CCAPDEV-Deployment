const db = require("../models/db");

const User = require("../models/UserModel.js");

const successController = {
    getSuccess : function(req, res){
        res.render("success")
    }
}
module.exports = successController;