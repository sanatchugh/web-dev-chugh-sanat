(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.website = {};
        vm.userId = $routeParams.userId;
        vm.createWebsite = createWebsite;

        function createWebsite(website) {
            if(website.name) {
                WebsiteService
                    .createWebsite(website, vm.userId)
                    .then(function (response) {
                        $location.url("/user/"+vm.userId+"/website");
                    },
                    function (error) {
                        vm.error = error.data;
                    });

            } else {
                vm.error = "Unable to create website";
            }
        }
    }
})();