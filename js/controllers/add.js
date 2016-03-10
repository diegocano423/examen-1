angular.module('examen')
    .controller('AddCtrl', ['$scope', '$routeParams', 'saveService', function($scope, $routeParams, saveService) {
    
    var idOfAccount = $routeParams.id;
    $scope.allAccs = saveService.getAccount();
    $scope.account = saveService.getOneAccount(idOfAccount);
    $scope.fare;
    $scope.descriptionMovement = '';
    $scope.movementType = '';

    $scope.clean = function(){
    	$scope.fare = '';
    	$scope.detail = '';
    };

    var saveMovement = function (pObject) {
        if (pObject) {
        	for (var i = 0; i < $scope.allAccs.length; i++) {
        		if ($scope.allAccs[i].id === $scope.account.id) {
        			$scope.allAccs[i].movements.push(pObject);
                    $scope.allAccs[i].movements.forEach(function (i, j) {
                        i.id = j;
                    });

                    if ($scope.allAccs[i].movements[i].type === "deposit") {
                        $scope.allAccs[i].balance += $scope.allAccs[i].movements[i].fare; 
                    } else if ($scope.allAccs[i].movements[i].type === "whitdraw") {
                        $scope.allAccs[i].balance -= $scope.allAccs[i].movements[i].fare; 
                    }

        			saveService.saveMovement($scope.allAccs, $scope.allAccs[i]);
        		};
        	};  	
        };
    };

    $scope.addMovement = function(){
        var movementInfo = {
        	date: new Date(),
        	type: $scope.movementType,
        	fare: $scope.fare,
        	detail: $scope.descriptionMovement
        }

        saveMovement(movementInfo);
        balanceUpdate();
        $scope.clean();
        $scope.movementForm.$setPristine();
    };
    console.log($scope.account.movements);
}])