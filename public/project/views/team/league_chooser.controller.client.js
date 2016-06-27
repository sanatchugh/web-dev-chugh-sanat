(function(){
    angular
        .module("ProjectApp")
        .controller("LeagueController", LeagueController);

    function LeagueController($location) {
        var vm = this;

        vm.findTeam = function(league) {

            if(league) {
                $location.url("/teamlist/"+ league);
            } else {
                vm.error = "User not found";
            }
        }
    }
})();