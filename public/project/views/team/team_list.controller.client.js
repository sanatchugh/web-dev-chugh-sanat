(function(){
    angular
        .module("ProjectApp")
        .controller("TeamListController", TeamListController);
    
    function TeamListController($routeParams, TeamService, $location ) {
        var vm = this;
        vm.league = $routeParams.league;
        vm.userId = $routeParams.id;

        function init() {
            vm.teamnames= TeamService.findTeams(vm.league);
        }
        init();
    }
})();