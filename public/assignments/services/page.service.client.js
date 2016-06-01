(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    var pages = [
        { "_id": "123", "name": "Ferrari",    "developerId": "456" },
        { "_id": "234", "name": "Lexus",     "developerId": "456" },
        { "_id": "456", "name": "Honda",     "developerId": "456" },
        { "_id": "567", "name": "Mercedes", "developerId": "123" },
        { "_id": "678", "name": "Teaser",    "developerId": "123" },
        { "_id": "321", "name": "Sesto Elemento",  "developerId": "234" }
    ];

    function PageService() {
        var api = {
            createPage: createPage(),
            findPagesForUserId: findPagesForUserId,
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

        function createPage(developerId, name, desc) {
            var newPage = {
                _id: (new Date()).getTime()+"",
                name: name,
                description: desc,
                developerId: developerId
            };
            pages.push(newPage);
            return newPage;
        }

        function findPagesForUserId(userId) {
            var resultSet = [];
            for(var i in pages) {
                if(pages[i].developerId === userId) {
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        }
    }
})();