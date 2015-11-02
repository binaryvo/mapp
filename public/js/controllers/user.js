define(['appModels/user.model', 'appViews/user.view', 'appControllers/user.controller', 'appCollections/user.collection', 'jquery', 'backbone'], function(baseModel, View, Controller, Collection, $, Backbone){

	var App = (function() {

		var appView;

		var appTemplates = {
			"listpage": _.template($('#main-page').html()),
			"adduserpage": _.template($('#userform').html()),
		};

		var appController;

        var appCollection;

		var appModel;

		var self = null;

		var module = function() {
			self = this;
		};

		module.prototype =
		{
			constructor: module,

			init: function() {
                self.initCollection();
				self.initModel();
				self.initView();
				self.initRouter();
			},

			initRouter: function() {

				appController = new Controller({ model: appModel});

				Backbone.history.start();
			},

			initView: function() {

				appView = new View({ model: appModel, templates: appTemplates, el: $("#main-content")});

                appViewUsers = new ViewUsers({ collection: appCollection, model: appModel, templates: appTemplates, el: $("#main-content")});

				appModel.trigger("change");
			},

			initModel: function() {

				appModel = new baseModel();
			},

            initCollection: function() {
                appCollection = new Collection();
            }

		};

		return module;
	})();

	return Application;
});