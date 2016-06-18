module.exports = function(){

    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var Page = mongoose.model("Page", PageSchema);

    var api = {

        createPage              : createPage,
        findAllPagesForWebsite  : findAllPagesForWebsite,
        findPageById            : findPageById,
        updatePage              : updatePage,
        deletePage              : deletePage
    };

    return api;

    function deletePage(pageId){
        return Page.remove({_id : pageId});
    }

    function findAllPagesForWebsite(websiteId){
        return Page.find({_website : websiteId});
    }
    
    function updatePage(pageId, page){
        delete page._id;
        return Page.update({_id : pageId},{
            $set : page
        });
    }

    function findPageById(pageId){
        return Page.findById(pageId);
    }

    function createPage(websiteId, page){
        delete page._id;
        page._website = websiteId;
        return Page.create(page);
    }


};