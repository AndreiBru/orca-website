var app = angular.module('meetupApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'home',
		controller: 'TestCtrl'
	})
	.when('/despre', {
		templateUrl: 'despre'
	})
	.when('/admitere', {
		templateUrl: 'admitere'
	})
	.when('/simulare', {
		templateUrl: 'simulare'
	})
	.when('/contact', {
		templateUrl: 'contact'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

app.controller('TestCtrl', function($scope) {
	$(function() {
	    $('.banner').unslider({
	    	speed: 500,
	    	delay: 7000
	    });
	});
});