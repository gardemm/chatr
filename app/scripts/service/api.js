(function() {
    'use strict';

    angular
        .module('SSite')
        .service('Api', Api);

    function Api($http, $cookies, $window, $q) {
        var service = this;

        service.data = {};
        service.cookie_name = 'X-Access-Token';

        service.getMessages = function (user_id) {
            var req = {};
            var q = $q.defer();
            if (user_id) {
                $http.get('http://test.wecret.com/chat/dialog?account_id=' + user_id).then(
                    function success(response) {
                        if (response.status == 200) {
                            console.log('200', response);
                            return response;
                        } else {
                            return false;
                        }
                    },
                    function error(response) {
                        console.log(response);
                        return false;
                    }
                );
            } else {
                return null;
            }
        }   

        // get info about user
        service.init = function() {

            service.isReady = $q.defer();

            var q = $q.defer();
            if ($cookies.get(service.cookie_name)) {
                service.getInfo().then(function() {
                    q.resolve();
                    // ready to render app
                    service.isReady.resolve();
                });
            } else {
                service.isReady.resolve();
            }
            return q.promise;
        }
    }
})();