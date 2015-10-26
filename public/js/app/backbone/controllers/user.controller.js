define(['backbone'], function(Backbone){

    var Controller = Backbone.Router.extend({
        initialize: function (options) {
            this.appUserModel = options.model;
        },

        routes: {
            "": "showListPage",
            "add": "addUserPage"
        },


        showMainPage: function () {
            this.appUserModel.set({ type: "listpage", page: 0 });
        },

        addUserPage: function () {
            this.appUserModel.set({ type: "adduserpage", page: 0 });
        }
    })

    return Controller;
});