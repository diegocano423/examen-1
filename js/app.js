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
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: '',
            controllerAs: ''
        })
        .when('/detail', {
            templateUrl: 'views/detail.html',
            controller: '',
            controllerAs: ''
        })
        .when('/error', {
            templateUrl: 'views/error.html',
            controller: '',
            controllerAs: ''
        })
        .otherwise({
            redirectTo: '/',
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
   }]);