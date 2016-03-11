angular.module('examen')
    .controller('AddCtrl', ['$scope', '$routeParams', 'saveService', '$location', function($scope, $routeParams, saveService, $location) {
    
    var idOfAccount = $routeParams.id;
    $scope.allAccs = saveService.getAccount();
    $scope.account = saveService.getOneAccount(idOfAccount);
    $scope.fare;
    $scope.descriptionMovement = '';
    $scope.movementType = '';

    /**
     * Description: limpia los inputs.
     * @method clean
     * @return 
     */
    $scope.clean = function(){
    	$scope.fare = '';
    	$scope.detail = '';
    };

    /**
     * Description: Guarda los movimientos en la cuenta actual y llama a la funcion calculate.
     * @method saveMovement
     * @param {} pObject
     * @return 
     */
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

            /**
             * Description: se encarga de actualizar el saldo de la cuenta dependiendo del tipo de movimiento.
             * @method calculate
             * @param {} p
             * @param {} type
             * @return 
             */
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

    /**
     * Description: Se encarga de crear el objeto que sera usado como parametro en saveMoment(),
       lo manda, llama a funcion clean() y redirecciona al resume de la cuenta actual.
     * @method addMovement
     * @return 
     */
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
}])