requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: 'libs/jquery/jquery-1.11.3.min',
        backbone: 'libs/backbone/backbone-min',
        underscore: 'libs/underscore/underscore-min',
        appControllers: 'controllers',
        appCollections: 'collections',
        appModels: 'models',
        appViews: 'views',
        bootstrap: 'libs/bootstrap/bootstrap',
        bootstrapModal: 'libs/backbone.bootstrap-modal-master/src/backbone.bootstrap-modal'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        bootstrapModal: {
            deps: ['backbone']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery', 'bootstrap'],
            exports: 'Backbone'
        }
    }
});

require(["app"], function (App) {
    App.initialize();
});