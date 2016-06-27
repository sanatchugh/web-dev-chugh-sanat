(function(){
    angular
        .module("ProjectApp")
        .controller("PlayerController", PlayerController);

    function PlayerController($location, $routeParams, TeamService, PlayerService) {
        var vm = this;

        function init() {
        }
        init();

    }

})();