module.exports = function(){

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User", UserSchema);

    var api = {

        createUser              : createUser,
        findUserById            : findUserById,
        findUserByCredentials   : findUserByCredentials,
        findUserByUsername      : findUserByUsername,
        updateUser              : updateUser,
        deleteUser              : deleteUser,
        getUsers                : getUsers
    };

    return api;

    function findUserByUsername(username, password){
        return User.findOne({username : username});
    }

    function findUserByCredentials(username, password){
        return User.findOne({username : username, password : password });
    }

    function findUserById(userId){
        return User.findById(userId);
    }

    function deleteUser(userId){
        return User.remove({_id : userId});
    }

    function updateUser(id,user){
        delete user._id;
        return User
            .update({_id : id},{
                $set : {
                    firstName   : user.firstName,
                    lastName    : user.lastName
                }
            });
    }

    function getUsers(){
        return User.find();
    }

    function createUser(user){
        return User.create(user);
    }


};