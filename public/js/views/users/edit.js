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
            var self = this;

            this.model.save({
                name: $(this.ui.name).val(),
                email: $(this.ui.email).val()
            }, {
                success: function (model, response, options) {
                    console.log("success");
                    self.closeForm();
                },
                error: function (model, response) {
                    console.log("error");

                    $(self.ui.form).find('span.text-danger').remove();
                    $.each(response.responseJSON, function(field, msg) {
                        $(self.ui[field]).parent().addClass('has-error').append($('<span>').addClass('text-danger').text(msg));
                    });
                },
                wait: true
            });
        },

        closeForm: function() {
            this.clearForm();
            //Backbone.history.navigate('', {trigger: true});
            Backbone.history.loadUrl(Backbone.history.fragment);
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