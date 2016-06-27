(function(){
    angular
        .module("ProjectApp")
        .controller("MylistController", MylistController);

    function MylistController($location, $routeParams, UserService, TeamService) {
        var vm = this;
        vm.userId = $routeParams.id;
        vm.leaguechooser=leaguechooser;

        function init() {
            vm.userplayerlist= TeamService.getUserPlayerList(vm.userId);
            console.log(vm.userplayerlist);
        }
        init();
        
        function leaguechooser() {
            console.log("/team/league_chooser/"+vm.userId);
            $location.url("/team/league_chooser/"+vm.userId);
            
        }
    }

})();