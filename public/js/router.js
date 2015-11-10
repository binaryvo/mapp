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
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;

        app_router.on('route:showListPage', function(){
            var userListView = new UserListView();
            userListView.render();

            var userAddView = new UserAddView({collection: userListView.collection});

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
