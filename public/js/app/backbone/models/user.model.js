define(['backbone'], function(Backbone) {

    var Model = Backbone.Collection.extend({
        url: 'api/users'
    });

    return Model;
});