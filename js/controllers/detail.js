angular.module('examen')
    .controller('DetailCtrl', ['$scope', 'saveService', '$routeParams', '$location', function($scope, saveService, $routeParams, $location) {
    
    var idOfAccount = $routeParams.id;
    var idOfMovement = $routeParams.idof;
    $scope.edit = false;
    $scope.newDescription = '';
    $scope.accounts = saveService.getAccount();
    $scope.currAcc = saveService.getOneAccount(idOfAccount);
    $scope.accounts[idOfAccount].movements.forEach(function () {
        $scope.currMovement = $scope.accounts[idOfAccount].movements[idOfMovement];
    });

    /**
     * Description: Permite la edicion.
     * @method startEdit
     * @param {} param
     * @return 
     */
    $scope.startEdit = function(param){
        if(param) {
            $scope.edit = true;
        }
    }

    /**
     * Description: Edita el detalle.
     * @method editMovement
     * @return 
     */
    $scope.editMovement = function(){
        if ($scope.edit) {
            $scope.accounts[idOfAccount].movements.forEach(function () {
                $scope.currMovement.detail = $scope.newDescription;
                saveService.saveMovement($scope.accounts, $scope.accounts[idOfAccount]);
            }); 
        } 
    }
}])