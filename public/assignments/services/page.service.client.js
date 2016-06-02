(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    var pages = [
        { "_id": "123", "name": "Ferrari",    "websiteId": "456" },
        { "_id": "234", "name": "Lexus",     "websiteId": "456" },
        { "_id": "456", "name": "Honda",     "websiteId": "456" },
        { "_id": "567", "name": "Mercedes", "websiteId": "123" },
        { "_id": "678", "name": "Teaser",    "websiteId": "789" },
        { "_id": "321", "name": "Sesto Elemento",  "websiteId": "789" }
    ];

    function PageService() {
        var api = {
            createPage: createPage(),
            findPagesForWebsiteId: findPagesForWebsiteId,
            deletePage: deletePage
        };
        return api;

        function deletePage(PageId) {
            for(var i in pages) {
                if(pages[i]._id === PageId) {
                    pages.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        function createPage(websiteId, name, desc) {
            var newPage = {
                _id: (new Date()).getTime()+"",
                name: name,
                description: desc,
                websiteId: websiteId
            };
            pages.push(newPage);
            return newPage;
        }

        function findPagesForWebsiteId(websiteId) {
            var resultSet = [];
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        }
    }
})();