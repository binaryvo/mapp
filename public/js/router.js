define([
    'backbone',
    'views/users/list',
    'views/users/add'
], function(Backbone, UserListView, UserAddView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            "": "showListPage",
            "add": "addUserPage",

            '*actions': 'defaultAction'
        },

        showBlock: function(block) {
            if ($("#app").html()) {
                $($("#app").children()).css('display', 'none').appendTo('body');
            }

            var innerContainer = $(block);
            $("#app").append(innerContainer);
            innerContainer.css('display', 'block');
        }

    });

    var initialize = function(){
        var app_router = new AppRouter;

        var userListView = new UserListView({xxx: app_router});
        userListView.render();

        var userAddView = new UserAddView({collection: userListView.collection});

        app_router.on('route:showListPage', function(){
            this.showBlock("#user-list-container");
        });

        app_router.on('route:addUserPage', function() {
            this.showBlock("#user-add-container");
        });

        app_router.on('route:defaultAction', function(actions){
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
