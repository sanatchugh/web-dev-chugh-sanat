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

    function WidgetService() {
        var api = {
            findWidgetsForPageId: findWidgetsForPageId
        };
        return api;

        function findWidgetsForPageId(pageId) {
            return widgets;
        }
    }
})();