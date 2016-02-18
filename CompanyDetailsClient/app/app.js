/**
 * Created by pratibha pandey.
 */

// Declare app level module which depends on views, and components
var companyApp = angular.module('companyApp', [
    'ui.router','ngAnimate', 'ui.bootstrap'
])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$provide', '$httpProvider',
        function ($urlRouterProvider, $stateProvider, $locationProvider, $provide, $httpProvider) {

            $httpProvider.interceptors.push('requestInterceptor');
            $httpProvider.interceptors.push('responseInterceptor');

            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {
                    templateUrl: "components/home/templates/home.html",
                    url: '/home',
                    controller: 'HomeController'
                })
                .state('error', {
                    templateUrl: "components/errorPages/templates/errorPage.html",
                    url: '/error'
                })
                .state('beneficialOwner',{
                    templateUrl: "components/beneficialOwner/templates/beneficialOwner.html",
                    url: '/beneficialOwner',
                    controller:'BeneficialOwnerController'
                });
            $provide.decorator("$exceptionHandler",
                ['$delegate', '$injector', function ($delegate, $injector) {
                    return function (exception, cause) {
                        $delegate(exception.message);
                    };
                }]);
        }
    ])
    .run(['$rootScope','$location','$state',function ($rootScope,$location,$state) {

    }]);