(function() {
    'use strict';

    angular.module('SSite').directive('enterSubmit', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                console.log('link enter');

                elem.bind('keydown', function(event) {
                    var code = event.keyCode || event.which;

                    if (code === 13) {
                        console.log('key down');
                        if (!event.shiftKey) {
                            event.preventDefault();
                            scope.$apply(attrs.enterSubmit);
                        }
                    }
                });
            }
        }
    });

}());