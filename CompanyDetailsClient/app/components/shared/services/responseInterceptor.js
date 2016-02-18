angular
.module('companyApp')
.factory('responseInterceptor', ['$q','$injector', function($q,$injector) {  

    var responseInjector = {
        response : function(responseData) {
            
            if(!isNullOrUndefined(responseData) && !isNullOrUndefined(responseData.status) ){
                switch(responseData.status){
                    
                    case 200 :
                            return responseData;
                    default :
                            break;
                }
            }    
            return responseData;
        } ,
        responseError : function(rejectionData){
            var $state = $injector.get('$state');
            if(!isNullOrUndefined(rejectionData) && !isNullOrUndefined(rejectionData.status) ){
                switch(rejectionData.status){
                    
                    case 400 :
                            break;
                        //moved to success because if a user does not exists
                        //api returns 401 which throws it to error page instead of
                        //showing him a message
                    case 401 :
                            return rejectionData;
                            break;
                    case 403 :
                            break;
                    case 404 :
                            break;
                    case 500 :
                            break;
                    case 503 :
                            break;
                    default :
                            break;
                }
            }
            // hide spinner loader if it is active
            // Below code will be uncommented when the error page will be designed 
            $state.go('error');
            return $q.reject(rejectionData);
        }
    };
    return responseInjector;
}]);