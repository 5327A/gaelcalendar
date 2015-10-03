angular.module('CalendarApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'p.html'
			})
			.when('/a',{
				templateUrl: 'a.html'
			})
			.when('/b',{
				templateUrl: 'b.html'
			})
			.when('/c',{
				templateUrl: 'c.html'
			})
			.when('/d',{
				templateUrl: 'd.html'
			})
			.otherwise({
				redirectTo: '/'
			})
	$locationProvider.html5Mode(true);
}])
.controller('calendarController', function($scope, $http, $window, $filter) {
    $http.get("/p.json")
    	.success(function(data) {$scope.pdata = data;
	});
	$http.get("/a.json")
    	.success(function(data) {$scope.adata = data;
	});
    $http.get("/b.json")
    	.success(function(data) {$scope.bdata = data;
	});
    $http.get("/c.json")
    	.success(function(data) {$scope.cdata = data;
	});
    $http.get("/d.json")
    	.success(function(data) {$scope.ddata = data;
	});
})
.filter("getDate", function($window){
   return function(input){
      var output = $window.formatDate(input);
      return output; 
   }
});
