var app = angular.module('meetupApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'home'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

app.controller('TestCtrl', function($scope) {
	console.log('from controller');
});