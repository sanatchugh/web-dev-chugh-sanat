module.exports = function() {

    var mongoose = require("mongoose");
    var PlayerSchema = require("./player.schema.server")();
    var Player = mongoose.model("Player", PlayerSchema);

    var api = {
        storeUserPlayerList: storeUserPlayerList,
        getUserPlayerList: getUserPlayerList
    };

    return api;


    function getUserPlayerList(userId) {
        return Player.find({"_user" : userId});
    }

    function storeUserPlayerList(userId, player) {
        player._user = userId;
        return Player.create(player);
    }
};