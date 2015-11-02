define([
    'backbone'
], function(Backbone) {

    var UserItemView = Backbone.View.extend({
        tagName: 'tr',

        initialize: function () {
            this.model.on('destroy', function() {
                this.remove()
            }, this);
        },

        events: {
            'click button.delete' : 'removeUser'
        },

        removeUser: function() {
            this.model.destroy();
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