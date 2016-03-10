angular.module('examen')
    .controller('RegisterCtrl', ['$scope', 'saveService', '$location', function($scope, saveService, $location) {
        $scope.allAccounts = saveService.getAccount();
        $scope.username = '';
        $scope.password = '';
        $scope.moneyType = '';
        $scope.accType = '';

        var cleanInputs = function(){
            $scope.username = '';
            $scope.password = '';
            $scope.moneyType = '';
            $scope.accType = '';
        };

        var saveOnStorage = function (pObject) {
            if (pObject) {
                $scope.allAccounts.push(pObject);
            }
            $scope.allAccounts.forEach(function (i, j) {
                i.id = j;
            });
        
            saveService.saveAccount($scope.allAccounts);
        };

        $scope.registerAccount = function(){
        	var accountInfo = {
        		username: $scope.username,
                password: $scope.password,
        		money: $scope.moneyType,
                account: $scope.accType,
                balance: 0,
                movements: {} 
        	};

        	saveOnStorage(accountInfo);
        	cleanInputs();
            $scope.registerForm.$setPristine();
            $location.path('/resume/' + accountInfo.id);
        };
        console.log($scope.allAccounts);
}])