module.exports = function(app) {

    var pages = [
        { "_id": "111", "name": "Ferrari",    "websiteId": "456"},
        { "_id": "222", "name": "Lexus",     "websiteId": "456"},
        { "_id": "333", "name": "Honda",     "websiteId": "456"},
        { "_id": "444", "name": "Mercedes", "websiteId": "123"},
        { "_id": "555", "name": "Teaser",    "websiteId": "789"},
        { "_id": "666", "name": "Sesto Elemento",  "websiteId": "456",}
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
                pages[i].description = newPage.description;
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