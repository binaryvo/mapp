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
            //console.log('user added');

            this.collection.create({
                name: this.$('#input-name').val(),
                email: this.$('#input-email').val()
            }, {wait: true});

            this.clearForm();

            this.router.navigate('/');
        },

        clearForm: function() {
            this.$('#input-name').val('');
            this.$('#input-email').val('');
        }
    });

    return UserAddView;
});