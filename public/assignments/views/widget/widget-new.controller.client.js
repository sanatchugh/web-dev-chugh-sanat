(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($sce, $routeParams, $location, WidgetService) {
        var vm = this;
        vm.createHeaderWidget = createHeaderWidget;
        vm.createImageWidget = createImageWidget;
        vm.createYouTubeWidget = createYouTubeWidget;
        vm.createHTMLWidget = createHTMLWidget;
        vm.createTextInputWidget = createTextInputWidget;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;


        function createImageWidget(pageId) {
            var imageWidget = {
                type: "IMAGE"
            };
            WidgetService
                .createWidget(pageId, imageWidget)
                .then(function (response) {
                    var newWidget = response.data;
                    if (newWidget) {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });
        }


        function createHTMLWidget(pageId) {
            var headerWidget = {
                type: "HTML"
            };
            WidgetService
                .createWidget(pageId, headerWidget)
                .then(function(response){

                    var newWidget = response.data;
                    if(newWidget) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });
        }

        function createYouTubeWidget(pageId) {
            var youtubeWidget = {
                type: "YOUTUBE"
            };
            WidgetService
                .createWidget(pageId, youtubeWidget)
                .then(function(response){
                    var newWidget = response.data;
                    if(newWidget) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });

        }

        function createTextInputWidget(pageId) {
            var headerWidget = {
                type: "INPUT"
            };
            WidgetService
                .createWidget(pageId, headerWidget)
                .then(function(response){

                    var newWidget = response.data;
                    if(newWidget) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });
        }

        function createHeaderWidget(pageId) {
            var headerWidget = {
                size:1,
                type:"HEADING"
            };
            WidgetService
                .createWidget(pageId, headerWidget)
                .then(function(response){

                    var newWidget = response.data;
                    if(newWidget) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });
        }
    }
})();