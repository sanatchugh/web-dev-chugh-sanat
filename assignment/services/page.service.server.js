module.exports = function(app) {

    var pages = [
        { "_id": "123", "name": "Ferrari",    "websiteId": "456", "developerId": "234"},
        { "_id": "234", "name": "Lexus",     "websiteId": "456", "developerId": "234" },
        { "_id": "456", "name": "Honda",     "websiteId": "456", "developerId": "234" },
        { "_id": "567", "name": "Mercedes", "websiteId": "123", "developerId": "234" },
        { "_id": "678", "name": "Teaser",    "websiteId": "789", "developerId": "234"},
        { "_id": "321", "name": "Sesto Elemento",  "websiteId": "789", "developerId": "234" }
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var newPage = req.body;

        newPage._id = (new Date()).getTime().toString();
        newPage.websiteId = req.params.websiteId;
        pages.push(newPage);
        res.json(newPage);
    }

    function findAllPagesForWebsite(req, res) {
        var id = req.params.websiteId;
        var result = [];

        for(var i in pages) {
            if(pages[i].websiteId === id) {
                result.push(pages[i]);
            }
        }

        res.json(result);
    }

    function findPageById(req, res) {
        var id = req.params.pageId;

        for(var i in pages) {
            if(pages[i]._id === id) {
                res.send(pages[i]);
                return;
            }
        }
        res.status(403);
    }

    function updatePage(req, res) {
        var id = req.params.pageId;
        var newPage = req.body;

        for(var i in pages) {
            if(pages[i]._id === id) {
                pages[i].name = newPage.name;
                pages[i].title = newPage.title;
                res.send(200);
                return;
            }
        }
        res.send(403);
    }

    function deletePage(req, res) {
        var id = req.params.pageId;

        for(var i in pages) {
            if(pages[i]._id === id) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.status(403);
    }
};