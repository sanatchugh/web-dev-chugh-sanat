(function(){
    angular
        .module("ProjectApp")
        .factory("PlayerService", PlayerService);


    function PlayerService() {
        var vm=this;
        var result;
        var api = {
            findPlayers: findPlayers
        };
        return api;


        function findPlayers() {

            // $location.url("/players/");
            //
            // var data =$.parseJSON($.ajax({
            //     async:false,
            //     headers: { 'X-Auth-Token': 'e9b294b714ba489e913c0948ae0f084e' },
            //     url: url,
            //     dataType: 'json',
            //     type: 'GET'
            // }).responseText);
            //
            // return(data.teams);

        }
        
    }
})();