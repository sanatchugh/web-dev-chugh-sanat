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
        websites    : [{type: mongoose.Schema.Types.ObjectId, ref: "Website"}],
        dateCreated : {type: Date, default : Date.now},
        facebook    :{
            displayName: String,
            token: String,
            id: String
        }
    }, {collection : "assignment.user"});

    return UserSchema;
};