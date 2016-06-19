module.exports = function() {

    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var Widget = mongoose.model("Widget", WidgetSchema);

    var api = {

        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        reorderWidget: reorderWidget

    };

    return api;

    function reorderWidget(pageId, start, end) {
        return Widget
            .find({"_page" : pageId},function(err, widgets){
                widgets.forEach(function(widget){

                    if(start < end) {
                        if(widget.order > start && widget.order <= end) {
                            widget.order--;
                            widget.save();
                        } else if(widget.order === start) {
                            widget.order = end;
                            widget.save();
                        }
                    } else {
                        if(widget.order >= end && widget.order < start) {
                            widget.order++;
                            widget.save();
                        } else if(widget.order === start) {
                            widget.order = end;
                            widget.save();
                        }
                    }
                });
            });
    }
    
    function updateWidget(widgetId, widget) {
        delete widget._id;
        return Widget
            .update({"_id": widgetId}, {
                $set: widget
            });
    }

    function findWidgetById(widgetId) {
        return Widget.findById(widgetId);
    }

    function deleteWidget(widgetId) {
        return Widget.remove({"_id" :widgetId});
    }

    function findAllWidgetsForPage(pageId) {
        return Widget.find({"_page": pageId});
    }

    function createWidget(pageId, widget) {
        widget._page = pageId;
        return findAllWidgetsForPage(pageId)
            .then(
                function (widgets) {
                    widget.order = widgets.length;
                    return Widget.create(widget);
                },
                function (err) {
                    return err;
                });
    }

};