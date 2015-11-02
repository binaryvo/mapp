requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: 'libs/jquery/jquery-1.11.3.min',
        backbone: 'libs/backbone/backbone-min',
        underscore: 'libs/underscore/underscore-min'//,
/*        appControllers: 'controllers',
        appCollections: 'collections',
        appModels: 'models',
        appViews: 'views'*/
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(["app"], function (App) {
    App.initialize();
});