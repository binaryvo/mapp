define([
    'backbone',
    'models/user'
], function(Backbone, UserModel){

    var UsersCollection = Backbone.Collection.extend({
        model: UserModel,
        url: 'api/users'
    });

    return UsersCollection;
});
