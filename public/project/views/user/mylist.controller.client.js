(function(){
    angular
        .module("ProjectApp")
        .controller("MylistController", MylistController);

    function MylistController($location, $routeParams, TeamService, $route, $scope) {
        var vm = this;
        vm.userId = $routeParams.id;
        vm.leaguechooser=leaguechooser;
        vm.deletePlayer=deletePlayer;
        vm.updateNote=updateNote;
        vm.deleteNote=deleteNote;
        vm.toggle=toggle;
        $scope.myNote=false;

        
        function init() {
            TeamService
                .getUserPlayerList(vm.userId)
                .then(function (response) {
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

        function deletePlayer(name) {
            TeamService
                .deletePlayer(name)
                .then(function (response) {
                        $location.url("mylist/"+vm.userId);
                        $route.reload();
                    },
                    function (error) {
                        vm.error = error.data;
                    });
        }

        function updateNote(id, notes) {
            TeamService
                .updateNote(vm.userId, id, notes)
                .then(function (response) {
                        $location.url("mylist/"+vm.userId);
                        $route.reload();
                    },
                    function (error) {
                        vm.error = error.data;
                    });
        }
        
        function deleteNote(id) {
            TeamService
                .deleteNote(vm.userId, id)
                .then(function (response) {
                        $location.url("mylist/"+vm.userId);
                        $route.reload();
                    },
                    function (error) {
                        vm.error = error.data;
                    });
        }

        function toggle() {
            $scope.myNote=!$scope.myNote;

        }

    }

})();