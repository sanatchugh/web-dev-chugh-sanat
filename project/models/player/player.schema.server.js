module.exports = function() {

    var mongoose = require("mongoose");

    var PlayerSchema = mongoose.Schema ({

        _user           : {type: mongoose.Schema.ObjectId , ref : "User"},
        name            : {type: String, required: true},
        num             : {type: Number, min: 0, max: 99 },
        nationality     : {type: String},
        dob             : {type: String},
        contractuntil   : {type: String},
        teamcode        : {type: String},
        league          : {type: String},
        developerId     : {type: String},
        dateCreated     : {type: Date, default : Date.now}
    }, {collection : "project.player"});

    return PlayerSchema;
};