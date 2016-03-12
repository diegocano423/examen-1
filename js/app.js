var examen = angular.module('examen', ['ngRoute', 'examen.services'])
 
examen.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'register'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .when('/resume/:id', {
            templateUrl: 'views/resume.html',
            controller: 'ResumeCtrl',
            controllerAs: 'resume'
        })
        .when('/resume/:id/add', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl',
            controllerAs: 'add'
        })
        .when('/resume/:id/detail/:idof', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl',
            controllerAs: 'detail'
        })
        .otherwise({
            redirectTo: '/',
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
   }]);