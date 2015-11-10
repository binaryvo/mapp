define([
    'backbone',
], function(Backbone) {

    var UserEditView = Backbone.View.extend({
        template: '#userEditTpl',

        initialize: function() {
            this.render();
        },

        events: {
            'submit':  'updateUser'
        },

        updateUser: function(e) {
            e.preventDefault();
            //console.log('user added');

            this.collection.create({
                name: this.ui.name.val(),
                email: this.ui.email.val()
            }, {wait: true});

            this.clearForm();
        },

        clearForm: function() {
            this.ui.name.val('');
            this.ui.email.val('');
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