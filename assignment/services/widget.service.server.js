module.exports = function(app, models) {
    var multer = require('multer');
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post("/api/upload/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", upload.single('myFile'), uploadImage);
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.put("/api/page/:pageId/widget", reorderWidget);

    var widgetModel = models.widgetModel;

    function findAllWidgetsForPage(req,res) {
        var id = req.params.pageId;

        widgetModel
            .findAllWidgetsForPage(id)
            .then(foundSuccess, foundError);

        function foundSuccess(widget) {
            res.json(widget);
        }

        function foundError(error) {
            res.status(400).json(error);
        }
    }

    function updateWidget(req,res) {
        var newWidget = req.body;
        var id = req.params.widgetId;

        widgetModel
            .updateWidget(id, newWidget)
            .then(updateSuccess, updateError);

        function updateSuccess(widget) {
            res.json(widget);
        }

        function updateError(error) {
            res.status(400).json(error);
        }
    }

    function uploadImage(req, res) {
        var userId = req.params.userId;
        var websiteId = req.params.websiteId;
        var pageId = req.params.pageId;
        var widgetId = req.params.widgetId;

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        widgetModel
            .findWidgetById(widgetId)
            .then(foundSuccess, foundError);

        function foundSuccess(widget) {
            widget.url = "/uploads/" + filename;
            widgetModel
                .updateWidget(widgetId, widget)
                .then(redirect, redirect);
        }

        function foundError() {
            redirect();
        }

        function redirect() {
            res.redirect("/assignment/index.html#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
        }
    }


    function findWidgetById(req,res) {
        var id = req.params.widgetId;

        widgetModel
            .findWidgetById(id)
            .then(foundSuccess, foundError);

        function foundSuccess(widget) {
            res.json(widget);
        }

        function foundError(error) {
            res.status(400).json(error);
        }
    }

    function deleteWidget(req,res) {
        var id = req.params.widgetId;

        widgetModel
            .deleteWidget(id)
            .then(deleteSuccess, deleteError);

        function deleteSuccess() {
            res.send(true);
        }

        function deleteError(error) {
            res.status(400).json(error);
        }
    }

    function createWidget(req,res) {
        var newWidget = req.body;
        var pageId = req.params.pageId;

        widgetModel
            .createWidget(pageId, newWidget)
            .then(createSuccess, createError);

        function createSuccess(widget) {
            res.json(widget);
        }

        function createError(error) {
            res.status(400).json(error);
        }
    }

    function reorderWidget(req, res) {
        var pageId = req.params.pageId;
        var start = req.query["start"];
        var end = req.query["end"];

        widgetModel
            .reorderWidget(pageId, start, end)
            .then(reorderSuccess, reorderError);

        function reorderSuccess() {
            res.json(true);
        }

        function reorderError(error) {
            res.status(400).json(error);
        }
    }
};