(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;

        function init() {
            vm.pages = PageService.findPagesForUserId(vm.userId);
        }
        init();
    }
})();
