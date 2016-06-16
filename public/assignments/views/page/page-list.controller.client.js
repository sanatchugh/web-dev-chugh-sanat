(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            PageService
                .findAllPagesForWebsite(vm.websiteId)
                .then(function (response) {
                    vm.pages=response.data;
                },
                function (error) {
                   vm.error = error.data;
                });
        }
        init();
    }
})();
