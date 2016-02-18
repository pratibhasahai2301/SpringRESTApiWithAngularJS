(function () {

    angular
        .module('companyApp')
        .factory('sessionService', ['$http', function ($http) {
           return {
               setItem: function (key, value) {
                    if (!isNullOrUndefined(value)) {
                        switch (key) {
                            case 'allCompaniesData':
                                this._allCompaniesData = value;
                                break;
                            case 'userDetails':
                                this._companyDetails = value;
                                break;
                            default :
                                break;
                        }
                    }
                },
                getItem: function (key) {
                    if (!isNullOrUndefined(key)) {
                        switch (key) {

                            case 'allCompaniesData':
                                return this._allCompaniesData;
                            case 'companyDetails':
                                return this._companyDetails;
                            default :
                                break;
                        }
                    }
                }
            };
        }])
})();
