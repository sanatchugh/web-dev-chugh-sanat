module.exports = function() {

    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema ({

        username    : {type: String, required: true},
        password    : String,
        firstName   : String,
        lastName    : String,
        dob         : Date,
        email       : String,
        phone       : String,
        players    : [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}],
        dateCreated : {type: Date, default : Date.now}
    }, {collection : "assignment.user"});

    return UserSchema;
};