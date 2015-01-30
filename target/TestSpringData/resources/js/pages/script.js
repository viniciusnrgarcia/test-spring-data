// create the module and name it scotchApp
var testAngularJSApp = angular.module('testAngularJSApp', []);

testAngularJSApp.config(function($routeProvider) {
	$routeProvider
	
		// route para a pagina home
		.when('/' , {
			templateUrl : 'index.html',
			controller : 'mainController'
		})
		
		.when('/about', {
			templateUrl : 'public/pages/about.html',
			controller : 'aboutController'
		})
		
		.when('/contact', {
			templateUrl : 'public/pages/contact.html',
			controller : 'contactController'
		});
});

//create the controller and inject Angular's $scope
testAngularJSApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Bem vindo ao AngularJS!'; 
});

testAngularJSApp.controller('aboutController', function($scope) {
	$scope.message = 'About Page.';
});

testAngularJSApp.controller('contactController', function($scope) {
	$scope.message = 'Pagina de Contatos.';
});