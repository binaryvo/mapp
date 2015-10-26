define(['backbone'], function() {

    var ViewUsers = Backbone.View.extend({
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
            //var user = new App.Views.User({model: user});
            //this.$el.append(user.render().el);
        }
    });

    return ViewUsers;
});