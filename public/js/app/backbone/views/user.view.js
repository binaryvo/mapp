define(['backbone'], function() {

    var User = Backbone.View.extend({
        tagName: 'tr',

        initialize: function () {
            //this.model.on('destroy', this.remove, this);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return User;
});