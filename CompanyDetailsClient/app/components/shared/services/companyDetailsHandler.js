(function () {
    angular
        .module('companyApp')
        .factory('companyDetailsHandler', ['$q', '$rootScope', '$http',
            function ($q, $rootScope, $http) {

                var transform = function (data) {
                    return $.param(data);
                };
                return {
                    getAllCompaniesData: function () {
                        var deferred = $q.defer();
                        $http
                            .get(window.company_config.endPointUrl + window.company_config.apiUrl.getAllCompaniesUrl)
                            .success(function (response) {
                                    if (!isNullOrUndefined(response)) {
                                        deferred.resolve(response);
                                    }else{
                                        deferred.reject()
                                    }
                            })
                            .error(function (msg, code) {
                                deferred.reject();
                            });

                        return deferred.promise;
                    },

                    getCompanyDetails: function (companyId) {
                        var deferred = $q.defer();
                        $http
                            .get(window.company_config.endPointUrl + window.company_config.apiUrl.getCompanyDetailsUrl+"/"+companyId)
                            .success(function (response) {
                                    if (!isNullOrUndefined(response)) {
                                        deferred.resolve(response);
                                    }else{
                                        deferred.reject();
                                    }
                            })
                            .error(function (msg, code) {
                                deferred.reject();
                            });
                        return deferred.promise;
                    },

                    updateCompanyDetails: function (companyDetails) {

                        var deferred = $q.defer();
                        console.log(angular.toJson(companyDetails));
                        if (!isNullOrUndefined(companyDetails) && !isNullOrUndefined(companyDetails.companyId)
                            && !isNullOrUndefined(companyDetails.companyName) && !isNullOrUndefined(companyDetails.address)
                            && !isNullOrUndefined(companyDetails.city) && !isNullOrUndefined(companyDetails.country)
                            && !isNullOrUndefined(window.company_config)) {

                            $http
                                .put(window.company_config.endPointUrl + window.company_config.apiUrl.getCompanyUpdateUrl+"/"+companyDetails.companyId,companyDetails)
                                .success(function (response) {
                                        if (!isNullOrUndefined(response)) {
                                            deferred.resolve(response.data);
                                        }
                                })
                                .error(function (msg, code) {
                                    deferred.reject();
                                });
                        } else {
                            deferred.reject();
                        }
                        return deferred.promise;
                    },

                    addBeneficiaryOwnerDetails: function (companyId, beneficialOwnerDetails) {

                        var deferred = $q.defer();

                        if (!isNullOrUndefined(companyId) && !isNullOrUndefined(beneficialOwnerDetails)
                            && !isNullOrUndefined(window.company_config)) {

                            console.log(angular.toJson(beneficialOwnerDetails));
                            $http
                                .post(window.company_config.endPointUrl + window.company_config.apiUrl.getBeneficialOwnerAddUrl+"/"+companyId,beneficialOwnerDetails)
                                .success(function (response) {
                                    if (!isNullOrUndefined(response)) {
                                        deferred.resolve(response.data);
                                    }
                                })
                                .error(function (msg, code) {
                                    deferred.reject();
                                });
                        } else {
                            deferred.reject();
                        }
                        return deferred.promise;
                    },

                    createCompanyDetails: function (companyDetails) {

                        var deferred = $q.defer();
                        if (!isNullOrUndefined(companyDetails)
                            && !isNullOrUndefined(companyDetails.companyName) && !isNullOrUndefined(companyDetails.address)
                            && !isNullOrUndefined(companyDetails.city) && !isNullOrUndefined(companyDetails.country)
                            && !isNullOrUndefined(window.company_config)) {
                            console.log(angular.toJson(companyDetails));
                            $http
                                .post(window.company_config.endPointUrl + window.company_config.apiUrl.getCompanyCreateUrl, companyDetails)
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (msg, code) {
                                    deferred.reject();
                                });
                        } else {
                            deferred.reject();
                        }
                        return deferred.promise;
                    }
                };
            }])
})();
