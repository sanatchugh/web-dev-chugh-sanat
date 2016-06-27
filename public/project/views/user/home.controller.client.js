(function(){
    angular
        .module("ProjectApp")
        .controller("HomeController", HomeController);

    function HomeController($location, $routeParams, UserService) {
        var vm = this;
        vm.userId = $routeParams.id;
        vm.register = register;
        var js;
        function register() {
            $.ajax({
                headers: { 'X-Auth-Token': 'e9b294b714ba489e913c0948ae0f084e' },
                url: 'http://api.football-data.org/v1/soccerseasons/424',
                dataType: 'json',
                type: 'GET',
            }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource

                console.log(response);
            });
        }

    }

})();