(function() {
    'use strict';

    angular
        .module('SSite')
        .run(runBlock);

    function runBlock($log, $rootScope) {
        $rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options) {
				// init user
			});
    }

}());