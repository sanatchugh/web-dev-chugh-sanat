(function(){
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.createPage = createPage;

        function createPage(name, description) {
            var newPage = PageService.createPage(vm.websiteId, name, description);
            if(newPage) {
                $location.url("/user/"+vm.websiteId+"/page/new");
            } else {
                vm.error = "Unable to create website";
            }
        }
    }
})();