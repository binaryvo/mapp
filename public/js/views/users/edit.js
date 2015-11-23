define([
    'backbone',
], function(Backbone) {

    var UserEditView = Backbone.View.extend({
        template: '#userEditTpl',
        ui: {
            editFormContainer: '.user-edit-form-container',
            form: '#form-user-edit',
            name: '#form-user-edit input[name=name]',
            email: '#form-user-edit input[name=email]'
        },

        initialize: function(options) {
            this.options = options;
            this.render();
        },

        events: {
            'submit #form-user-edit':  'updateUser',
            'click .btn-cancel' : 'closeForm'
        },

        updateUser: function(e) {
            e.preventDefault();

            this.model.save({
                name: $(this.ui.name).val(),
                email: $(this.ui.email).val()
            });

            this.closeForm();
        },

        closeForm: function() {
            console.log('navigate to the list');
            Backbone.history.navigate('', {trigger: true});
        },

        clearForm: function() {
            $(this.ui.name).val('');
            $(this.ui.email).val('');
        },

        render: function() {
            var template = _.template($(this.template).html());
            var compiledTemplate = template(this.model.toJSON());
            this.$el.html(compiledTemplate);
            return this;
        }
    });

    return UserEditView;
});