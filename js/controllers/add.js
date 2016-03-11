angular.module('examen')
    .controller('AddCtrl', ['$scope', '$routeParams', 'saveService', '$location', function($scope, $routeParams, saveService, $location) {
    
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
        var balance = {
            whitdraw: 0,
            deposit: 0
        }

        if (pObject) {
        	for (var i = 0; i < $scope.allAccs.length; i++) {
        		if ($scope.allAccs[i].id === $scope.account.id) {
        			$scope.allAccs[i].movements.push(pObject);
                    $scope.allAccs[i].movements.forEach(function (i, j) { 
                        i.id = j;
                    });

        		};
        	};

            var calculate = function (p, type) {
                balance[type] += p;
            }

           $scope.allAccs[idOfAccount].movements.forEach(function (o) {
                o.type === "deposit" ? calculate(o.fare, "deposit"): calculate(o.fare, "whitdraw");
            });
	         $scope.allAccs[idOfAccount].balance = balance.deposit - balance.whitdraw;

             saveService.saveMovement($scope.allAccs, $scope.allAccs[i]);
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
        $scope.clean();
        $scope.movementForm.$setPristine();
        $location.path("/resume/" + idOfAccount);
    };
    console.log($scope.account.movements);
}])