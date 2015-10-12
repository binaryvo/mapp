(function() {
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Router: {}
    };

    App.Models.User = Backbone.Model.extend({
        defaults: {
            name: '',
            email: '',
            password: ''
        },

        urlRoot: 'api/users'
    });

    App.Collections.Users = Backbone.Collection.extend({
        model: App.Models.User,

        url: 'api/users'
    });

    App.Views.Users = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        render: function() {
            this.el.empty();
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function(user) {
            var user = new App.Views.User({model: user});
            this.$el.append(user.render().el);
        }
    });

    App.Views.User = Backbone.View.extend({
        tagName: 'li',

        initialize: function() {
            this.model.on('destroy', this.remove, this);
        },

        render: function() {
            this.$el.html(this.model.get('name'));
            return this;
        }
    });

    window.vent = _.extend({}, Backbone.Events);
}());

App.Router = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    index: function() {
        console.log('Index!!!');
    }
});