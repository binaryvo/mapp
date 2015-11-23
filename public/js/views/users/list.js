define([
    'backbone',
    'collections/users',
    'views/users/item'
], function(Backbone, UsersCollection, UserItemView) {

    var UserListView = Backbone.View.extend({
        el: $('#all_users_table'),
        tagName: 'tbody',

        initialize: function(options) {
            this.options = options;
            this.collection = new UsersCollection();
            this.collection.on('add', this.addOne, this);
            this.collection.fetch();
        },

        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function(user) {
            var userItem = new UserItemView({model: user, router: this.options.router});
            this.$el.append(userItem.render().el);
        }
    });

    return UserListView;
});