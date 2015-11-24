define([
    'backbone'
], function(Backbone) {

    var UserAddView = Backbone.View.extend({
        template: '#user-add-container',
        el: '#form-user',
        ui: {
            name: '#input-name',
            email: '#input-email'
        },

        events: {
            'submit':  'addUser',
            'click .btn-cancel' : 'closeForm'
        },

        addUser: function(e) {
            e.preventDefault();
            var self = this;

            this.collection.create({
                name: $(this.ui.name).val(),
                email: $(this.ui.email).val()
            }, {
                success: function (model, response, options) {
                    console.log("success");
                    self.closeForm();
                },
                error: function (model, response) {
                    console.log("error");

                    $(self.el).find('span.text-danger').remove();
                    $.each(response.responseJSON, function(field, msg) {
                        $(self.ui[field]).parent().addClass('has-error').append($('<span>').addClass('text-danger').text(msg));
                    });
                },
                wait: true
            });
        },

        clearForm: function() {
            this.$(this.ui.name).val('');
            this.$(this.ui.email).val('');
            $(this.template).find('span.text-danger').remove();
            $(this.template).find('.has-error').removeClass('has-error');
        },

        closeForm: function() {
            this.clearForm();
            Backbone.history.navigate('', {trigger: true});
        },

        render: function() {
            this.clearForm();
            var template = _.template($(this.template).html());
            this.$el.html(template);
            return this;
        }
    });

    return UserAddView;
});