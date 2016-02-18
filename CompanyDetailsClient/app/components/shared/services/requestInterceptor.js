angular
.module('companyApp')
.factory('requestInterceptor', ['$q','$injector', function($q,$injector) {  
    var requestInjector = {
        request: function(config) {
            
            var  $state = $injector.get('$state');

            return config;
        } 
    };
    return requestInjector;
}]);
