require.config({
    paths: {
        angular: '../../bower_components/angular/angular',
        domReady: '../../bower_components/requirejs-domready/domReady',
        angularRoute: '../../bower_components/angular-route/angular-route',
        uiBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    },
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'angularRoute': ['angular'],
        'uiBootstrap': ['angular']
    }
});
window.name = "NG_DEFER_BOOTSTRAP!";
require( [
    'angular',
    'domReady',
    'app',
    'routes'
], function(ng, domReady, app) {
    domReady(function (document) {
        ng.resumeBootstrap([app['name']]);
    });
});