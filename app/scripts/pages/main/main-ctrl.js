(function(Angular) {
  'use strict';

  angular
		.module('SSite')
		.controller('MainCtrl', ['$rootScope', '$scope', '$timeout', 'Api', 'focus', '$compile', MainCtrl]);

		function MainCtrl($rootScope, $scope, $timeout, Api, focus, $compile) {
		  
		  var vm = this;

		  vm.message = '';

		  vm.users = [
		  	{
		  	  name: 'Elena broun',
		  	  id: 1,
		  	  dialog: [
				  {
				  	'id': '11',
				  	'account': 'Elena broun',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': 'Elena broun',
				  	'text': 'Hello',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '13',
				  	'account': 'Elena broun',
				  	'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '14',
				  	'account': 'Elena broun',
				  	'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '15',
				  	'account': 'Elena broun',
				  	'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '16',
				  	'account': '1234',
				  	'text': 'ПРивет',
				  	'timestamp': '2345678123'
				  }] 
				},
			  { name: 'teddy Maier', 
			  	id: 2,
			    dialog: [{
				  	'id': '11',
				  	'account': 'teddy Maier',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': 'teddy Maier',
				  	'text': 'Hello',
				  	'timestamp': '2345678123'
				  }]
				},
			  { name: 'Eddi Merkury', 
			  	id: 3,
			  	dialog: [
			  	{
				  	'id': '11',
				  	'account': 'Eddi Merkury',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': '1234',
				  	'text': 'Hello',
				  	'timestamp': '2345678123'
				  }
			  ]},

			  { name: 'Suzan Decole', 
			  	id: 4,
			  	dialog: [
			  	{
				  	'id': '11',
				  	'account': '1234',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': 'Suzan Decole',
				  	'text': 'Hello',
				  	'timestamp': '2345678123'
				  }
			  ]},


			  { name: 'Peter Parker', 
			  	id: 5,
			  	dialog: [
			  	{
				  	'id': '11',
				  	'account': 'Peter Parker',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': 'Peter Parker',
				  	'text': 'Hello',
				  	'timestamp': '2345678123'
				  }
				]},

			  { name: 'Sonya Blade', 
			  	id: 6,
			  	dialog: [
			  	{
				  	'id': '11',
				  	'account': 'Sonya Blade',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': 'Sonya Blade',
				  	'text': 'Hello',
				  	'timestamp': '2345678123'
				  }
			  ]},

			  { name: 'Nicole Kidman', 
			  	id: 7,
			  	dialog: [{
				  	'id': '11',
				  	'account': 'Nicole Kidman',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': '1234',
				  	'text': 'Good morning',
				  	'timestamp': '2345678123'
				  }]
		  	},

		  	{ name: 'Jerry Nee', 
			  	id: 7,
			  	dialog: [{
				  	'id': '11',
				  	'account': 'Jerry Nee',
				  	'text': 'hi',
				  	'timestamp': '2345678123'
				  },
				  {
				  	'id': '12',
				  	'account': '1234',
				  	'text': 'Hey you',
				  	'timestamp': '2345678123'
				  }]
		  	}
		  ];

		  vm.enableDialogs = false;
		  vm.enableChat = true;
		  vm.showContent = true;
		  vm.currentDialogId = null;
		  vm.currentDialogName = '';

		  vm.addMsg = addMsg;
		  vm.toggleUser = toggleUser;
		  vm.pushSearch = pushSearch;
		  vm.toggleChat = toggleChat;
		  vm.openDialog = openDialog;
		  vm.clearDialog = clearDialog;
		  vm.sendMessage = sendMessage;

		  init();

		  //////

		  function init () {

		  	$timeout(function() {
			  	var num = 0;
		  		angular.forEach(vm.msgs, function (key, value) {
			  		vm.addMsg(num++);
			  	});
			  }, 0);

			_scrollDownChat();
		  }

		  function clearDialog() {
		  	angular.element(document.getElementById('body-message'))
		        .empty();
		  }


		  function addMsg(message_num, user_index) {
				angular.element(document.getElementById('body-message'))
		        .append($compile('<message data="main.users[' + user_index + '].dialog[' + message_num + ']"></message>')($scope));

		 		 $('#chat-scrollable').bind('scrollend', function(e){
			      /* console.log("current HTMLDivElement", e.currentTarget);*/
			    });
		  };

		  function toggleUser() {
		  	vm.enableDialogs = !vm.enableDialogs;

		  	$timeout(function() {
		  		$scope.$apply();
		  	}, 0);
		  };

		  function pushSearch() {
		  	focus('searchForPeople');
		  };

		  function toggleChat() {

		  	vm.enableChat = !vm.enableChat;

		  	$timeout(function() {
		  		$scope.$apply();
		  	}, 0);
		  }; 

		  function openDialog (user_id) {
		  	vm.enableDialogs = true;
		  	
		  	var userIndex = _getUserIndex(user_id);

		  	vm.currentDialogId = user_id;
		  	vm.currentDialogName = vm.users[ userIndex ].name;

			clearDialog();

		  	// add dialog
		  	$timeout(function() {
			  	var num = 0;
		  		angular.forEach(vm.users[ userIndex ].dialog, function (key, value) {
			  		vm.addMsg(num++, userIndex);
			  	});
			  }, 0);

		  	focus('inputTextMessage');
		  }

		  function sendMessage () {
		  	  if(vm.message) {
			  	  var userIndex = _getUserIndex( vm.currentDialogId );
			  	
			  	  vm.users[ userIndex ].dialog.push({
			  		  account: '1234',
			  		  text: vm.message,
			  		  timestamp: + new Date()
			  	  });

			  	  addMsg(vm.users[ userIndex ].dialog.length - 1, userIndex);

			  	  _scrollDownChat();

			  	  vm.message = '';
		  	  }
		  }

		  // private

		  function _getUserIndex (user_id) {
		  	for (var i = 0; i < vm.users.length; i++) {
		  		if(vm.users[i].id === user_id) {
		  			console.log('return id', user_id);
		  			return i;
		  		}
		  	}

		  	console.log('error! cant find user by id :(');

		  	return null;
		  };


		  function _scrollDownChat () {
		  	  $timeout(function() {
			  	  $('#chat-scrollable').bind('scrollend', function(e){
			          /* console.log("current HTMLDivElement", e.currentTarget);*/
			      });
			  	  $scope.$apply();
			  }, 300);
		  }

	}

}());
