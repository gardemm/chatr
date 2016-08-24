(function(Angular) {
  'use strict';

  angular
	.module('SSite')
	.controller('MainCtrl', MainCtrl);

	function MainCtrl($rootScope, $scope, $timeout, Api, focus, $compile) {
	  console.log('main overview page');
	  $rootScope.page = 'main';

	  //SApi.getMessages('1234');

	  $scope.msgs = [
	  {
	  	'id': '11',
	  	'account': 'Micheal',
	  	'text': 'hi',
	  	'timestamp': '2345678123'
	  },
	  {
	  	'id': '12',
	  	'account': 'Micheal',
	  	'text': 'Hello',
	  	'timestamp': '2345678123'
	  },
	  {
	  	'id': '13',
	  	'account': 'Micheal',
	  	'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	  	'timestamp': '2345678123'
	  },
	  {
	  	'id': '14',
	  	'account': 'Micheal',
	  	'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	  	'timestamp': '2345678123'
	  },
	  {
	  	'id': '15',
	  	'account': 'Micheal',
	  	'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	  	'timestamp': '2345678123'
	  },
	  {
	  	'id': '16',
	  	'account': '1234',
	  	'text': 'ПРивет',
	  	'timestamp': '2345678123'
	  }];

	  $scope.users = ['Elena broun', 
	  'teddy Maier', 
	  'Eddi Merkury', 
	  'Suzan Decole', 
	  'Peter Parker', 
	  'Sonya Blade', 
	  'Nicole Kidman', 
	  'Super Sonic'
	  ];

	  $scope.enableUsers = false;

	  $scope.addMsg = function (num) {
		angular.element(document.getElementById('body-message'))
        .append($compile('<message data="msgs['+ num +']"></message>')($scope));

 		$("#chat-scrollable").bind("scrollend", function(e){
	      /* console.log("current HTMLDivElement", e.currentTarget);*/
	    });
	  };

	  $scope.enableChat = true;

	  $scope.toggleUser = function () {
	  	$scope.enableUsers = !$scope.enableUsers;

	  	$timeout(function() {
	  		$scope.$apply();
	  	}, 100);
	  };	

	  $scope.pushSearch = function () {
	  	focus('searchForPeople');
	  };

	  $timeout(function() {
	  	var num = 0;
  		angular.forEach($scope.msgs, function (key, value) {
	  		$scope.addMsg(num++);
	  	});
	  }, 0);

	  $scope.toggleChat = function () {
	  	$scope.enableChat = !$scope.enableChat;

	  	$timeout(function() {
	  		$scope.$apply();
	  	}, 600);
	  };

	  $scope.showContent = true;
	  $timeout(function() {
	  	$("#chat-scrollable").bind("scrollend", function(e){
	      /* console.log("current HTMLDivElement", e.currentTarget);*/
	    });
	  	$scope.$apply();
	  }, 2000);

	}

}());
