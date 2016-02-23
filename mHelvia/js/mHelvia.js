var app = angular.module('mHelvia', []);

app.controller('ListCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

/*
app.controller('Test', function($scope, $http) {
	$http.get('http://sicsop07.uco.es:8080/rest/status').success(function(data) {
		    console.log('Salida: '+ $scope);
            $scope.greeting = data;
        });
*/


app.controller('Communities', function($scope, $http) {
	$http.get('http://sicsop07.uco.es:8080/rest/communities/top-communities').success(function(data) {
		    console.log('communities: '+ $scope.name);
            $scope.communities = data;
        });



});