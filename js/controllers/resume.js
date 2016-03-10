angular.module('examen')
    .controller('ResumeCtrl', ['$scope', 'saveService', '$routeParams', '$location', function($scope, saveService, $routeParams, $location) {
    
    var idOfAccount = $routeParams.id;
    $scope.account = saveService.getOneAccount(idOfAccount);

    $scope.deleteContact = function() {
        saveService.remove(idOfContact);
        $location.path('/contact');
    };  
}])