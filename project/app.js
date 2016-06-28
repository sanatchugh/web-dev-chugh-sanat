module.exports = function(app) {
    var models = require("./models/models.server")();
    require("./services/user.service.server.js")(app, models);
    require("./services/team.service.server.js")(app);
};