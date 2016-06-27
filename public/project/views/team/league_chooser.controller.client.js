(function(){
    angular
        .module("ProjectApp")
        .controller("LeagueController", LeagueController);

    function LeagueController($location, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.id;

        vm.findTeam = function(league) {

            if(league) {
                $location.url("/teamlist/"+ league +"/"+vm.userId);
            } else {
                vm.error = "User not found";
            }
        }
    }
})();