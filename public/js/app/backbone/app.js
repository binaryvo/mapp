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
        tagName: 'tbody',

        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        render: function() {
            this.$el.empty();
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function(user) {
            var user = new App.Views.User({model: user});
            this.$el.append(user.render().el);
        }
    });

    App.Views.User = Backbone.View.extend({
        tagName: 'tr',

        template: $('#userTpl').html(),

        initialize: function() {
            //this.model.on('destroy', this.remove, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
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
        //console.log('Index!!!');
    }
});

App.Collections.Contacts = Backbone.Collection.extend({
    model: App.Models.Contact,
    url: '/contacts'

});

App.Models.Contact = Backbone.Model.extend({

});

App.Views.App = Backbone.View.extend({
    initialize: function() {
        console.log(this.collection.toJSON());
    }
})