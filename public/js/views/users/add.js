define([
    'backbone'
], function(Backbone) {

    var UserAddView = Backbone.View.extend({
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

            this.collection.create({
                name: $(this.ui.name).val(),
                email: $(this.ui.email).val()
            }, {wait: true});

            this.closeForm();
        },

        clearForm: function() {
            this.$(this.ui.name).val('');
            this.$(this.ui.email).val('');
        },

        closeForm: function() {
            this.clearForm();
            Backbone.history.navigate('', {trigger: true});
        }
    });

    return UserAddView;
});