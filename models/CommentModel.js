var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({


    CommentUser: {
        type: String,
        required: true
    },

    CommentDescription: {
        type: String,
        required: true
    },

    CommentImage: {
        type: String,
        required: false
    },

    CommentTime: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Comment', CommentSchema);