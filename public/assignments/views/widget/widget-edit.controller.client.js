(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($sce, $routeParams, $location, WidgetService) {
        var vm = this;
        vm.widgetId = $routeParams.widgetId;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;

        function init() {
            WidgetService
                .findWidgetsById(vm.widgetId)
                .then(function(response){
                    vm.widget = response.data;
                    if(vm.widget.type === "HEADING"){
                        vm.widget.size = vm.widget.size+"";
                    }
                });
        }
        init();
        vm.deleteWidget = deleteWidget;
        vm.updateWidget = updateWidget;

        function updateWidget(widgetId, widget) {

            WidgetService
                .updateWidget(widgetId, widget)
                .then(
                    function(response) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
                    },
                    function(error) {
                        vm.error = "Unable to update widget";
                    }
                );

        }

        function deleteWidget(widgetId) {
            WidgetService
                .deleteWidget(widgetId)
                .then(
                    function(response){
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"+vm.pageId+"/widget");
                    },
                    function(error) {
                        vm.error = "Unable to delete widget";
                    }
                );
        }
    }
})();