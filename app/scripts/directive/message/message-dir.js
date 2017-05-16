(function() {
  'use strict';

  angular
	.module('SSite')
	.directive('message', function () {
	  return {
			restrict: 'E',
			scope: {
				'text': '=',
				'timestamp': '=',
				'account': '=',
				'id': '=',
				'data': '='
			},
			templateUrl: 'scripts/directive/message/message.html',
			controller: function ($scope) {
				$scope.myMsg = false;

				if($scope.data.account == '1234') {
					$scope.myMsg = true;
				}
				console.log($scope.data);
			}
	  }
	});
	
}());