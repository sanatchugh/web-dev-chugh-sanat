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
        vm.updatePage = updatePage;

        function init(){
            PageService
                .findPagebyId(vm.pageId)
                .then(function (response) {
                    vm.page = response.data;
                },
                function (error) {
                   vm.error = error.data;
                });
        }
        init();

        function deletePage() {
            PageService
                .deleteWebsite(pageId)
                .then(function(response){
                        $location.url("user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            },
            function (error){
                vm.error = "Unable to delete pagee";
            });
        }

        function updatePage(page) {
            if(page.name){
                PageService
                    .updatePage(vm.pageId, page)
                    .then(function (response) {
                            $location.url("user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                        },
                        function (error){
                            vm.error = "Unable to delete pagee";
                        });
            }
            else{
                page.error="Name is required";
            }
        }
    }
})();