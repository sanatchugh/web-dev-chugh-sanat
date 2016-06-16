(function(){
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.createPage = createPage;

        function createPage(page) {
            if(page && page.name) {
                PageService
                    .createPage(vm.websiteId, page)
                    .then(function(response) {
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                        },
                        function(error) {
                            vm.error = error.data;
                        });
            }
            else {
                vm.error = "New page must have name";
            }
        }
    }
})();