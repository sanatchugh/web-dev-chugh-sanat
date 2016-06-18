module.exports = function() {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/webdev');

    var models = {
        userModel: require("./user/user.model.server.js")(),
        websiteModel: require("./website/website.model.server")(userModel),
        pageModel: require("./page/page.model.server")(websiteModel),
        widgetModel: require("./widget/widget.model.server")(pageModel)
    };

    return models;
};