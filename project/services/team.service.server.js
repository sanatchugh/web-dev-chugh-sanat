module.exports = function(app) {

   var playerlist=[];

    app.post("/api/user/:userId/player", storeUserPlayerList);
    app.get("/api/user/:userId/player", getUserPlayerList);
    app.delete("/api/player/:name", deletePlayer);
    app.put("/api/player/:id/:playerId/:notes", updateNote);
    app.delete("/api/player/:id/:playerId/", deleteNote);



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

    function deletePlayer(req, res){
        var name = req.params.name;
        for(var i in playerlist){
            if(name == playerlist[i].name){
                playerlist.splice(i,1);
                res.sendStatus(200);
                return;
            }
        }
        res.status(400);
    }

    function updateNote(req, res) {
        var id = req.params.id;
        var playerId = req.params.playerId;
        var notes = req.params.notes;
        for(var i in playerlist){
            if(id == playerlist[i].developerId && playerId == playerlist[i]._id){
                playerlist[i].note=notes;
                res.sendStatus(200);
                return;
            }
        }
        res.status(400);

    }
    function deleteNote(req, res) {
        var id = req.params.id;
        var playerId = req.params.playerId;
        console.log(playerId);
        for(var i in playerlist){
            if(id == playerlist[i].developerId && playerId == playerlist[i]._id){
                playerlist[i].note="";
                res.sendStatus(200);
                return;
            }
        }
        res.status(400);

    }
};