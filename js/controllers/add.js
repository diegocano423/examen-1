angular.module('examen')
    .controller('AddCtrl', ['$scope', '$routeParams', 'saveService', function($scope, $routeParams, saveService) {
    
    var idOfAccount = $routeParams.id;
    $scope.account = saveService.getOneAccount(idOfAccount);
}])