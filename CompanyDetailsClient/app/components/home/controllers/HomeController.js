/**
 * Created by pratibha pandey
 */
angular.module('companyApp').controller('HomeController',
    ['$scope', 'companyDetailsHandler', 'companyDetailService', '$state',
        function ($scope, companyDetailsHandler, companyDetailService,$state) {
    var self = this;
    self.company_form_submitted = false;
    self.companyDetailsAddSuccess = false;
    self.companyDetailsAddFailure = false;
    self.failToUpdateCompanyDetails = false;
    self.failToFetchCompanyDetails = false;

    self.fetchAllCompaniesData = function () {
        var _allCompaniesDataPromise = companyDetailsHandler.getAllCompaniesData();

        _allCompaniesDataPromise
            .then(function (allCompaniesDataObject) {
                self.allCompanyDetails = allCompaniesDataObject;
                self.failToFetchCompanyDetails = false;
            }, function (reason) {
                self.failToFetchCompanyDetails = true;
            });
    };

    self.editCompanyDetails = function (companyId) {
        for (var i = 0; i < self.allCompanyDetails.length; i++) {
            if (self.allCompanyDetails[i].companyId == companyId) {
                self.companydetails = angular.copy(self.allCompanyDetails[i]);
                break;
            }
        }
    };

    self.updateCompanyDetails = function () {
        var _updateCompanyDetailsPromise = companyDetailsHandler.updateCompanyDetails(self.companydetails);
        _updateCompanyDetailsPromise
            .then(function (response) {
                self.fetchAllCompaniesData();
                self.failToUpdateCompanyDetails = false;
            }, function (reason) {
                self.failToUpdateCompanyDetails = true;
            });
    };

    self.addCompanyDetails = function () {
        var _createCompanyDetailsPromise = companyDetailsHandler.createCompanyDetails(self.companydetails);
        _createCompanyDetailsPromise
            .then(function (response) {
                self.fetchAllCompaniesData();
                self.companyDetailsAddSuccess = true;

            }, function (reason) {
                self.companyDetailsAddSuccess = false;
            });
    };

    self.openBeneficiaryDetailPage = function (companyId) {
        companyDetailService.setCompanyId(companyId);
        $state.transitionTo('beneficialOwner');
    };

    self.resetCompanyDetailsForm = function () {
        $scope.company_form.$setPristine();
        $scope.company_form.$setUntouched();
        self.company_form_submitted = false;
        self.companydetails = {};
        self.edit_mode = false;
    };

    self.submitCompanyForm = function () {
        if (!isNullOrUndefined(self.companydetails.companyId)) {
            self.updateCompanyDetails();
        } else {
            self.addCompanyDetails();
        }
        self.resetCompanyDetailsForm();
    };

    self.fetchAllCompaniesData();
}]);