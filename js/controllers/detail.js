angular.module('examen')
    .controller('DetailCtrl', ['$scope', 'saveService', '$routeParams', '$location', function($scope, saveService, $routeParams, $location) {
    
    var idOfAccount = $routeParams.id;
    var idOfMovement = $routeParams.idof;
    $scope.accounts = saveService.getAccount();
    $scope.currAcc = saveService.getOneAccount(idOfAccount);
    $scope.accounts[idOfAccount].movements.forEach(function () {
        $scope.currMovement = $scope.accounts[idOfAccount].movements[idOfMovement];
    });
}])