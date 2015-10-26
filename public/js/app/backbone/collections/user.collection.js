define(['backbone'], function(Backbone) {

    var Collection = Backbone.Collection.extend({
        url: 'api/users'
    });

    return Collection;
});