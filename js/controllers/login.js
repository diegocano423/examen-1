angular.module('examen')
    .controller('LoginCtrl', ['$scope', 'saveService', '$location', function($scope, saveService, $location, $routeParams) {
    $scope.registeredAccounts = saveService.getAccount();
    /**
     * Description: Se encarga del login, al ser todas las condiciones correctas, reccidercionar su respectivo resume.
     * @method loginAccount
     * @return 
     */
    $scope.loginAccount = function(){
    	for (var i = 0; i < $scope.registeredAccounts.length; i++) {
    		if ($scope.registeredAccounts[i].id === $scope.accountId) {
          if ($scope.registeredAccounts[i].password === $scope.passLogin) {
            $location.path('/resume/' + $scope.registeredAccounts[i].id);
          } else {
            alert('Wrong account number or password. Verify and try again.');
          } 
    		};   
    	};
    };
  }])

