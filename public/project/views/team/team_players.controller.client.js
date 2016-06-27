(function(){
    angular
        .module("ProjectApp")
        .controller("TeamPlayersController", TeamPlayersController);

    function TeamPlayersController($routeParams, TeamService, $location ) {
        var vm = this;
        vm.code=$routeParams.code;
        vm.userId=$routeParams.id;
        vm.liked=liked;

        function init() {
            vm.playernames = TeamService.findTeamURL(vm.code);
        }
        init();
        
        function liked() {
                
                $location.url("/mylist/" + vm.userId);
        }
    }
})();