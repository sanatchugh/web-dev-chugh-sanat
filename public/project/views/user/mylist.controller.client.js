(function(){
    angular
        .module("ProjectApp")
        .controller("MylistController", MylistController);

    function MylistController($location, $routeParams, PlayerService) {
        var vm = this;
        vm.userId = $routeParams.id;

        function init() {
            PlayerService
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