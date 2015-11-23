define([
    'backbone',
    'views/users/edit',
], function(Backbone, UserEditView) {

    var UserItemView = Backbone.View.extend({
        tagName: 'tr',
        ui: {
            editFormContainer: '.user-edit-form-container',
        },

        initialize: function (options) {
            this.options = options;
            this.model.on('destroy', this.remove, this);
            this.model.on('change', this.render, this);
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
            this.options.router.showBlock(userEditView.el);
            //Backbone.history.navigate('edit/' + this.model.id, {trigger: true});//.editUserPage(this.model.id);
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