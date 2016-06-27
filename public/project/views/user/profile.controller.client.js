(function(){
    angular
        .module("ProjectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.unregister = unregister;

        var id = $routeParams.id;

        function init() {
            UserService
                .findUserById(id)
                .then(function(response){
                    vm.user = response.data;
                });
        }
        init();

        function unregister() {
            UserService
                .deleteUser(id)
                .then(
                    function(){
                        $location.url("/login");
                    },
                    function() {
                        vm.error = "Unable to remove user"
                    }
                );
        }

        function updateUser(newUser) {
            console.log(newUser);
            UserService
                .updateUser(id, newUser)
                .then(
                    function(response) {
                        vm.success = "Updated successfully";
                        var user = response.data;
                        if(user) {
                            $location.url("/home/"+user._id);
                        }
                    },
                    function(error) {
                        vm.error = "Unable to update user"
                    }
                );
        }
    }

})();