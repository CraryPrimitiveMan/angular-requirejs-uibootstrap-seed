define(['./module'], function(mod) {

    mod.directive('ngTest', function() {
        return {
            restrict: 'EA',
            replace: true,
            template: '',
            link: function(scope, elem, attrs) {
            }
        }
    });
});
