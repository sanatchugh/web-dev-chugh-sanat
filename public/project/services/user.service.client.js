(function(){
    angular
        .module("ProjectApp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            createUser: createUser,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findUserById: findUserById,
            updateUser: updateUser,
            deleteUser: deleteUser,
            findPlayersForUserId: findPlayersForUserId
        };
        return api;

        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }

        function updateUser(id, newUser) {
            var url = "/api/user/" + id;
            return $http.put(url, newUser);
        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url);
        }

        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }
        function findPlayersForUserId(developerId) {
            var url = "/api/user/" + developerId + "/players";
            return $http.get(url);
        }

    }
})();