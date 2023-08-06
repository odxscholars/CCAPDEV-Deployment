var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema ({

    PostUser: {
        type: String,
        required: true
    },

    PostTitle: {
        type: String,
        required: true
    },

    PostDescription: {
        type: String,
        required: false
    },

    PostImage: {
        type: String,
        required: false
    },

    PostTime: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Post', PostSchema);