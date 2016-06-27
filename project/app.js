module.exports = function(app) {
    var models = require("./models/models.server")();
    require("./services/user.service.server.js")(app, models);
    //require("./services/player.service.server.js")(app);
};