define(['backbone'], function(Backbone) {

    var UserModel = Backbone.Model.extend({

        validate: function(attrs) {
            if (!attrs.name || !attrs.email) {
                return 'All fields required';
            }
        }
    });

    return UserModel;
});