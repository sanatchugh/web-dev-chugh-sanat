(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        vm.deletePage = deletePage;

        function deletePage(pageId) {
            var result = PageService.deleteWebsite(pageId);
            if(result) {
                $location.url("/user/"+vm.websiteId+"/page/"+vm.pageId);
            } else {
                vm.error = "Unable to delete pagee";
            }
        }
    }
})();