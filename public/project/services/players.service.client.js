(function(){
    angular
        .module("ProjectApp")
        .factory("PlayerService", PlayerService);


    function PlayerService($http) {
        var api = {
            createPlayer: createPlayer,
            updatePlayer: updatePlayer,
            findPlayerById: findPlayerById,
            findPlayersForUserId: findPlayersForUserId,
            deletePlayer: deletePlayer
        };
        return api;

        function deletePlayer(playerId) {
            var url = "/api/player/"+playerId;
            return $http.delete(url);
        }

        function createPlayer(player, developerId) {
            var url = "/api/user/"+developerId+"/player";
            return $http.post(url, player);
        }

        function findPlayersForUserId(developerId) {
            var url = "/api/user/" + developerId + "/player";
            return $http.get(url);
        }

        function findPlayerById(playerId) {
            var url = "/api/player/" + playerId;
            return $http.get(url);
        }

        function updatePlayer(playerId, player) {
            var url = "/api/player/" + playerId;
            return $http.put(url);
        }
    }
})();