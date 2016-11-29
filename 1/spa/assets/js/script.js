
	var exampleApp = angular.module("example",['ngRoute']);

	exampleApp.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when("/",{
				templateUrl : "index.html",
				controller : "homeControl",
			})
			.when("about",{
				templateUrl : "about.html",
				controller : "abtContrl",
			})
			.when("contact",{
				templateUrl : "contact.html",
				controller : "contactCtrl",
			})
	});

	exampleApp.controller("homeControl", function($scope){
		$scope.message = "Welcome to our world!!!";
			
	})
	exampleApp.controller("abtContrl", function($scope){
		$scope.message = "Success!!! You have reached our contact page";
			
	})
	exampleApp.controller("contactCtrl", function($scope){
		$scope.message = "Thanks for you reach us";			
	})


