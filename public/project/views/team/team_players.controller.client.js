(function(){
    angular
        .module("ProjectApp")
        .controller("TeamPlayersController", TeamPlayersController);

    function TeamPlayersController($routeParams, TeamService, $location, $scope ) {
        var vm = this;
        vm.code=$routeParams.code;
        vm.userId=$routeParams.id;
        vm.league=$routeParams.league;
        vm.liked=liked;


        function init() {
            vm.playernames = TeamService.findTeamURL(vm.code);
            $scope.playernames = vm.playernames;
        }
        init();
        
        function liked(name, num, nationality, dob, contractuntil) {
                TeamService.storeUserPlayerList(vm.userId, vm.code, vm.league, name, num, nationality, dob, contractuntil);
                $location.url("/mylist/" + vm.userId);
        }
        $scope.query = {};
        $scope.queryBy = '$';
        $scope.orderProp="name";
    }
})();