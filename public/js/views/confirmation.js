define([
    'backbone',
], function(Backbone) {

    var ConfirmationDialog = Backbone.View.extend({
        el: '#confirmation-window',
        template: '#confirmation-dialog',

        initialize: function (options) {
            this.options = options;
            this.render(this.options.text);
        },

        events: {
            'click button.button-yes' : 'yesHandler'
        },

        yesHandler: function(e) {
            var self = this;
            console.log('yes handled');
            debugger;
            this.options.onYes;
        },

        render: function (dialogText) {
            var template = _.template($(this.template).html());
            var compiledTemplate = template({text: dialogText});
            $(compiledTemplate).modal();
            return this;
        }
    });

    return ConfirmationDialog;
});