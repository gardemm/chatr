(function() {
    'use strict';

    angular
        .module('SSite')
        .run(['$log', '$rootScope', runBlock]);

    function runBlock($log, $rootScope) {
        $rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options) {
				// init user
			});
    }

})();