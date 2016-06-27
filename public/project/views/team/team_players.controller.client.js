(function(){
    angular
        .module("ProjectApp")
        .controller("TeamPlayersController", TeamPlayersController);

    function TeamPlayersController($routeParams, TeamService, $location ) {
        var vm = this;
        vm.code=$routeParams.code;

        function init() {
            vm.playernames = TeamService.findTeamURL(vm.code);
        }
        init();
    }
})();