(function () {
    angular
        .module('companyApp')
        .factory('companyDetailService', ['$q', '$rootScope', '$http',
            function ($q, $rootScope, $http) {
                var companyIdSaved;
                return {
                    setCompanyId: function (companyId) {
                        companyIdSaved = companyId;
                    },

                    getCompanyId: function () {
                        return companyIdSaved;
                    }
                };
            }])

})();
