(function(){
    angular
        .module("ProjectApp")
        .controller("MylistController", MylistController);

    function MylistController($location, $routeParams, UserService, TeamService) {
        var vm = this;
        vm.userId = $routeParams.id;
        vm.leaguechooser=leaguechooser;

        function init() {
            console.log(TeamService.getUserPlayerList(vm.userId));
            TeamService
                .getUserPlayerList(vm.userId)
                .then(function (response) {
                        console.log(response.data);
                        vm.userplayerlist=response.data;

                    },
                    function (error) {
                        vm.error = error.data;
                    });
        }
        init();
        
        function leaguechooser() {
            $location.url("/team/league_chooser/"+vm.userId);
            
        }
    }

})();