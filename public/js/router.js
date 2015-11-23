define([
    'backbone',
    'views/users/list',
    'views/users/add',
    'views/users/edit',
], function(Backbone, UserListView, UserAddView, UserEditView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            "": "showListPage",
            "add": "addUserPage",
            "edit/:id": "editUserPage",

            '*actions': 'defaultAction'
        },

        showBlock: function(block) {
            if ($("#app").html()) {
                $($("#app").children()).hide().appendTo('body');
            }
            var innerContainer = $(block);
            $("#app").append(innerContainer);
            innerContainer.show();
        },
/*
        showModal: function(block, title) {
            if ($("#modal-container .modal-body").html()) {
                $($("#modal-container .modal-body").children()).css('display', 'none').appendTo('body');
            }

            var innerContainer = $(block);
            var template = _.template($("#modal-container").html());
            var compiledTemplate = template({content: innerContainer.show(), title: title});
            $(compiledTemplate).show().modal('show');
        }
*/
    });

    var initialize = function(){
        self = this;
        var router = new AppRouter;

        var userListView = new UserListView({router: router});
        userListView.render();

        var userAddView = new UserAddView({collection: userListView.collection});

        router.on('route:showListPage', function(){
            router.showBlock("#user-list-container");
        });

        router.on('route:addUserPage', function() {
            router.showBlock("#user-add-container");
        });
/*
        router.on('route:editUserPage', function(options) {
            debugger;
            var userEditView = new UserEditView({model: this.model, router: this.router});
            userEditView.render();
            //this.options.router.showBlock(userEditView.el);
            //router.showBlock("#user-add-container");
        });
*/
        router.on('route:defaultAction', function(actions){
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
