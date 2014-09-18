	// create the module and name it birtdayApp
	var birtdayApp = angular.module('birtdayApp', ['birth-day']);

	
	

	// create the controller and inject Angular's $scope
	birtdayApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.birthdate=new Date();
		$scope.birthdatechange=function(){
		//Do Your Code here
		}
	});
