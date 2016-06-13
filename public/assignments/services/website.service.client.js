(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);


    function WebsiteService($http) {
        var api = {
            createWebsite: createWebsite,
            updateWebssite: updateWebsite,
            findWebsiteById: findWebsiteById,
            findWebsitesForUserId: findWebsitesForUserId,
            deleteWebsite: deleteWebsite
        };
        return api;

        function deleteWebsite(websiteId) {
            var url = "/api/website/"+websiteId;
            return $http.delete(url);
        }

        function createWebsite(website, developerId) {
            var url = "/api/user/"+developerId+"/website";
            return $http.post(url, website);
        }

        function findWebsitesForUserId(developerId) {
            var url = "/api/user/" + developerId + "/website";
            return $http.get(url);
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url);
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;
            return $http.put(url);
        }
    }
})();