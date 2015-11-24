define([
    'backbone',
    'bootstrapModal',
    'views/users/edit',
], function(Backbone, BootstrapModal, UserEditView) {

    var UserItemView = Backbone.View.extend({
        tagName: 'tr',
        ui: {
            editFormContainer: '.user-edit-form-container'
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
            var self = this;

            var modal = new Backbone.BootstrapModal({
                content: 'Do you really want to delete User?',
                title: 'Confirmation',
                animate: true
            }).open(function(){
                self.deleteUser(self.model);
            });
        },

        deleteUser: function(model) {
            model.destroy();
        },

        editUser: function() {
            var userEditView = new UserEditView({model: this.model});
            this.options.router.showBlock(userEditView.el);
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