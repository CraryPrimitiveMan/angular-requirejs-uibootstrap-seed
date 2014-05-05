define([
    'angular',
    'angularRoute',
    'uiBootstrap',
    'controllers/loader',
    'directives/loader',
    'filters/loader',
    'services/loader'
], function (ng) {
    var app = ng.module('app', [
        'ngRoute',
        'ui.bootstrap',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services'
    ]);

    return app;
});