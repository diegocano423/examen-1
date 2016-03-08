var examen = angular.module('examen', ['ngRoute', 'examen.services'])
 
examen.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeCtrl',
            controllerAs: 'welcome'
        })
       .when('/', {
            templateUrl: 'views/.html',
            controller: 'MainCtrl',
            controllerAs: ''
        })
        .when('//:id', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl',
            controllerAs: 'detail'
        })
        .when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorCtrl',
            controllerAs: 'error'
        })
        .otherwise({
            redirectTo: '/',
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
   }]);