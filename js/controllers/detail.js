angular.module('examen')
    .controller('DetailCtrl', ['$scope', 'saveService', '$routeParams', '$location', function($scope, saveService, $routeParams, $location, $route) {
    
    
    var idOfAccount = $routeParams.id;
    var idOfMovement = $routeParams.idof;
    $scope.accounts = saveService.getAccount();
    $scope.currAcc = saveService.getOneAccount(idOfAccount);

    console.log(idOfMovement);

     
    $scope.currMovement;
    
    
    console.log($routeParams);
    

    $scope.accounts[idOfAccount].movements.forEach(function () {
        $scope.currMovement = $scope.accounts[idOfAccount].movements[idOfMovement];
        console.log('entered');
    });
    
}])