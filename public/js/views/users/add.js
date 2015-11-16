define([
    'backbone'
], function(Backbone) {

    var UserAddView = Backbone.View.extend({
        el: '#form-user',

        events: {
            'submit':  'addUser'
        },

        addUser: function(e) {
            e.preventDefault();

            this.collection.create({
                name: this.$('#input-name').val(),
                email: this.$('#input-email').val()
            }, {wait: true});

            this.clearForm();

            Backbone.history.navigate('', {trigger: true});
        },

        clearForm: function() {
            this.$('#input-name').val('');
            this.$('#input-email').val('');
        }
    });

    return UserAddView;
});