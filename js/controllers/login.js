angular.module('examen')
    .controller('LoginCtrl', ['$scope', 'saveService', '$location', function($scope, saveService, $location, $routeParams) {
    $scope.registeredAccounts = saveService.getAccount();
 
    $scope.loginAccount = function(){
    	for (var i = 0; i < $scope.registeredAccounts.length; i++) {
    		if ($scope.registeredAccounts[i].id === $scope.accountId) {
                if ($scope.registeredAccounts[i].password === $scope.passLogin) {
                	console.log('correcto');
                	$location.path('/resume/' + $scope.registeredAccounts[i].id);
                } else {
                	console.log('Incorrecto');
                }
    		};   
    	};
    };
  }])

