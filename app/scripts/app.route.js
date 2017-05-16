(function() {
    'use strict';

    angular
        .module('SSite')
        .config(['$stateProvider', '$urlRouterProvider', routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/scripts/pages/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

}());