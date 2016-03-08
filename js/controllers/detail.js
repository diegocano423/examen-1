angular.module('examen')
    .controller('DetailCtrl', ['$scope', 'saveService', '$routeParams', '$location', function($scope, saveService, $routeParams, $location) {
    
    var idOfContact = $routeParams.id;
    $scope.contact = saveService.getOneContact(idOfContact) || $location.path("/error");

    $scope.deleteContact = function() {
        saveService.remove(idOfContact);
        $location.path('/contact');
    };  
}])