module.exports = function(app, models) {

    var playerModel = models.playerModel;

    app.post("/api/user/:userId/player", createPlayer);
    app.get("/api/user/:userId/player", findPlayersForUserId);
    app.get("/api/player/:playerId", findPlayerById);
    app.put("/api/player/:playerId", updatePlayer);
    app.delete("/api/player/:playerId", deletePlayer);

    function createPlayer(req, res){
        var player = req.body;
        var userId = req.params.userId;
        playerModel
            .createPlayer(userId, player)
            .then(
                function(player){
                    res.json(player);
                },
                function (err) {
                    res.statusCode(400).send(err);
                }
            );
    }

    function findPlayersForUserId(req, res) {
        var userId = req.params.userId;
        playerModel
            .findPLayersForUserId(userId)
            .then(
                function(players){
                    res.json(players);
                },
                function(err) {
                    res.statusCode(404).send(err);
                }
            );
    }

    function findPlayerById (req, res) {
        var playerId = req.params.playerId;
        playerModel
            .findPlayerById(playerId)
            .then(
                function(player) {
                    res.json(player);
                },
                function(err) {
                    res.statusCode(404).send(err);
                }
            );
    }

    function updatePlayer(req, res) {
        var playerId = req.params.playerId;
        var newPlayer = req.body;
        playerModel
            .updatePlayer(playerId, newPlayer)
            .then(
                function(stats){
                    res.sendStatus(200);
                },
                function(err){
                    res.statusCode(404).send(err);
                }
            );
    }

    function deletePlayer (req, res) {

        var playerId = req.params.playerId;
        playerModel
            .deletePlayer(playerId)
            .then(
                function(stats) {
                    res.sendStatus(200);
                },
                function(err){
                    res.statusCode(404).send(err);
                }
            );
    }
};