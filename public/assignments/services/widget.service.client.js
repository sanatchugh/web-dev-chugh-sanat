(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {

        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetsById: findWidgetsById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            reorderWidget: reorderWidget
        };
        return api;

        function updateWidget(widgetId, widget) {
            var url = "/api/widget/" + widgetId._id;
            return $http.put(url, widgetId);
        }

        function reorderWidget(pageId, start, end) {
            var url = "/api/page/"+pageId+"/widget?start="+start+"&end="+end;
            return $http.put(url);
        }

        function findWidgetsByPageId(pageId) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.get(url);
        }

        function createWidget(pageId, widget) {
            var newWidget = {
                type: widget.type
            };
            var url = "/api/page/" + pageId + "/widget";
            return $http.post(url, newWidget);
        }
        
        function deleteWidget(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.delete(url);
        }

        function findWidgetsById(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.get(url);
        }
    }
})();