define([
    'backbone',
    'views/users/edit',
], function(Backbone, UserEditView) {

    var UserItemView = Backbone.View.extend({
        tagName: 'tr',

        initialize: function () {
            this.model.on('destroy', function() {
                this.remove()
            }, this);
        },

        events: {
            'click button.delete' : 'removeUser',
            'click button.edit': 'editUser'
        },

        removeUser: function() {
            this.model.destroy();
        },

        editUser: function() {
            var userEditView = new UserEditView({model: this.model});
            $('body').append(userEditView.el);
        },

        render: function () {
            var template = _.template($('#userTpl').html());
            var compiledTemplate = template(this.model.toJSON());
            this.$el.html(compiledTemplate);
            return this;
        }
    });

    return UserItemView;
});