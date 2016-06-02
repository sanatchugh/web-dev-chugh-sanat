(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.pageId = $routeParams.pageId;
        vm.deletePage = deletePage;

        function deletePage(pageId) {
            var result = PageService.deleteWebsite(pageId);
            if(result) {
                $location.url("/user/"+vm.userId+"/page");
            } else {
                vm.error = "Unable to delete pagee";
            }
        }
    }
})();