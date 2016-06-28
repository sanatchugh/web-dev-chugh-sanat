module.exports = function(app) {

   var playerlist=[];

    app.post("/api/user/:userId/player", storeUserPlayerList);
    app.get("/api/user/:userId/player", getUserPlayerList);

    function storeUserPlayerList(req, res){
        var newPlayer = req.body;
        newPlayer._id = (new Date()).getTime()+"";
        newPlayer.developerId = req.params.userId;
        playerlist.push(newPlayer);
        res.json(newPlayer);
    }

    function getUserPlayerList(req, res) {
        var userId = req.params.userId;
        var result = [];
        for(var w in playerlist) {
            if(playerlist[w].developerId === userId) {
                result.push(playerlist[w]);
            }
        }
        res.json(result);
    }

};