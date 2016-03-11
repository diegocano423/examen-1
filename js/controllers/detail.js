angular.module('examen')
    .controller('DetailCtrl', ['$scope', 'saveService', '$routeParams', '$location', '$route', function($scope, saveService, $routeParams, $location, $route) {
    
    var idOfMovement = $routeParams;
    var idOfAccount;
    $scope.accounts = saveService.getAccount();

    
    for (var i = 0; i < $scope.accounts.length; i++) {
    	$scope.accounts[i].id === idOfAccount;
    	console.log('entered2' + idOfAccount);
    };

    
    $scope.currMovement;
    $scope.currAcc = saveService.getOneAccount(idOfAccount);
    
    
    
    console.log($routeParams);
    

    $scope.accounts[idOfAccount].movements.forEach(function () {
        $scope.currMovement = $scope.accounts[idOfAccount].movements[idOfMovement];
        console.log('entered');
    });
    
}])