var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

});

const User = mongoose.model("user", UserSchema);

module.exports = User;