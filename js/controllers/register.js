angular.module('examen')
    .controller('RegisterCtrl', ['$scope', 'saveService', '$location', function($scope, saveService, $location) {
        $scope.allAccounts = saveService.getAccount();
        $scope.username = '';
        $scope.password = '';
        $scope.accType = '';
        /**
         * Description: Se encarga de limpiar los inputs usados en la creacion de la cuenta.
         * @method cleanInputs
         * @return 
         */
        var cleanInputs = function(){
            $scope.username = '';
            $scope.password = '';
            $scope.accType = '';
        };

        /**
         * Description: Guarda las cuentas y les asigna un id. 
         * @method saveOnStorage
         * @param {} pObject
         * @return 
         */
        var saveOnStorage = function (pObject) {
            if (pObject) {
                $scope.allAccounts.push(pObject);
            }
            $scope.allAccounts.forEach(function (i, j) {
                i.id = j;
            });
        
            saveService.saveAccount($scope.allAccounts);
        };

        /**
         * Description: Crea el objeto usado como parametro en la funcion saveOnStorage(),
         * llama a la funcion cleanInputs() y redirecciona al resume de la cuenta.
         * @method registerAccount
         * @return 
         */
        $scope.registerAccount = function(){
        	var accountInfo = {
        		username: $scope.username,
                password: $scope.password,
                account: $scope.accType,
                balance: 0,
                movements: []
        	};

        	saveOnStorage(accountInfo);
        	cleanInputs();
            $scope.registerForm.$setPristine();
            $location.path('/resume/' + accountInfo.id);
        };
    }])