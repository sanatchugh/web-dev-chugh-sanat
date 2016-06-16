(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "LAMBORGHINI", "websiteId": "789", "developerId": "234"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "The BEAST Lies Within", "websiteId": "789", "developerId": "234"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://cdn.lamborghini.com/content/homepage/Lamborghini-Centenario-3-4-Front-HP-models_1920x1080.jpg", "websiteId": "789", "developerId": "234"},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Sesto Elemento", "websiteId": "789", "developerId": "234"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://www.youtube.com/embed/zRT1hw_-0a8", "websiteId": "789", "developerId": "234" },
    ];

    var api = {
        createWidget: createWidget,
        findWidgetsByPageId: findWidgetsByPageId,
        findWidgetsById: findWidgetsById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget
    };
    return api;

    function createWidget(pageId, widget) {
        widget._id = Date.now().valueOf();
        widgets.push(widget);
    }

    function findWidgetsByPageId(pageId) {
        var result = [];
        for(var i in widgets) {
            if(widgets[i].pageId === pageId) {
                result.push(widgets[i]);
            }
        }
        return result;
        function findWidgetsById(widgetId) {
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    return widgets[i];
                }
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    widgets.remove(i);
                    widget._id = widgetId;
                    widgets.push(widget);
                    return true;
                }
            }
            return false;
        }

        function deleteWidget(widgetId) {
            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    widgets.remove(i);
                    return true;
                }
            }
            return false;
        }
    }
})();