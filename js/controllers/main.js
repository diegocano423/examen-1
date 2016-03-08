angular.module('examen')
    .controller('MainCtrl', ['$scope', 'saveService', function($scope, saveService) {
        $scope.allContacts = saveService.getContacts();
        $scope.contactName = '';
        $scope.contactNumber = '';
        $scope.filter = {};

        var cleanInputs = function(){
            $scope.contactName = '';
            $scope.contactNumber = '';
        };

        var saveOnStorage = function (pObject) {
            if (pObject) {
                $scope.allContacts.push(pObject);
            }
            $scope.allContacts.forEach(function (i, j) {
                i.id = j;
            });
        
            saveService.saveContacts($scope.allContacts);
        };

        $scope.addContact = function(){
        	var contactInfo = {
        		name: $scope.contactName,
        		number: $scope.contactNumber,
                newNumber: {}
        	};

        	saveOnStorage(contactInfo);
        	cleanInputs();
            $scope.contactForm.$setPristine();
        };
}])