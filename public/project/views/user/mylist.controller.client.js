(function(){
    angular
        .module("ProjectApp")
        .controller("MylistController", MylistController);

    function MylistController($location, $routeParams, UserService) {
        var vm = this;
        vm.userId = $routeParams.id;

        function init() {
            UserService
                .findPlayersForUserId(vm.userId)
                .then(function (response) {
                        vm.playernames=response.data;

                    },
                    function (error) {
                        vm.error = error.data;
                    });
        }
        init();


    }

})();