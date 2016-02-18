/**
 * Created by pratibha pandey
 */
angular.module('companyApp').controller('BeneficialOwnerController', ['$scope','companyDetailsHandler','companyDetailService',function ($scope, companyDetailsHandler,companyDetailService) {
    var self = this;
    self.bo_form_submitted = false;
    self.beneficialOwnerDetails = [];
    self.companyDetails ={};
    self.beneficialOwnersAddSuccess = false;
    self.beneficialOwnersAddFailure = false;

    self.getCompanyId = function(){
      self.companyId = companyDetailService.getCompanyId();
    };

    self.getCompanyDetailsById = function () {

        self.getCompanyId();
        var companyId = self.companyId;
        var _getCompanyDetailsPromise = companyDetailsHandler.getCompanyDetails(companyId);
        _getCompanyDetailsPromise
            .then(function (response) {
                self.companyDetails = response;
                self.beneficialOwnerDetails = angular.copy(self.companyDetails.beneficialOwners);
                if(self.beneficialOwnerDetails.length ==0){
                    self.addBORow();
                }

                self.companyDetailsFetchSuccess = true;
            }, function (reason) {
                console.log("Unable to fetch company data for companyId:" + self.companyId);
                self.companyDetailsFetchSuccess = false;
            });
    };

    self.addBeneficiaryOwnerDetails = function(beneficialOwnerDetailsToSave){
        var _addBeneficialOwnerDetailsPromise = companyDetailsHandler.addBeneficiaryOwnerDetails(self.companyId, beneficialOwnerDetailsToSave);
        _addBeneficialOwnerDetailsPromise
            .then(function (response) {
                self.beneficialOwnersAddSuccess = true;
                self.beneficialOwnersAddFailure = false;
                self.getCompanyDetailsById();
            }, function (reason) {
                self.beneficialOwnersAddSuccess = false;
                self.beneficialOwnersAddFailure = true;
            });
    };

    self.addBORow = function() {
        var beneficialOwner = {};
        beneficialOwner.beneficialOwnerId=0;
        beneficialOwner.beneficialOwnerName='';
        self.beneficialOwnerDetails.push(beneficialOwner);
    };

    self.deleteBORow = function (index) {
        self.beneficialOwnerDetails.splice(index, 1);
        if(self.beneficialOwnerDetails.length == 0){
            self.addBORow();
        }
    };

    self.submitBeneficialOwnerForm = function () {
        var beneficialOwnersToSave = [];

        for(var i=0; i<self.beneficialOwnerDetails.length;i++){
            var beneficialOwnerToSave = {};
            var beneficialOwner = self.beneficialOwnerDetails[i];
            beneficialOwnerToSave.beneficialOwnerId= beneficialOwner.beneficialOwnerId;
            beneficialOwnerToSave.beneficialOwnerName= beneficialOwner.beneficialOwnerName;
            beneficialOwnerToSave.company={};
            beneficialOwnersToSave.push(beneficialOwnerToSave);
        }
        self.addBeneficiaryOwnerDetails(beneficialOwnersToSave);
    };

    self.resetBeneficialOwnerForm = function(){
        self.beneficialOwnerDetails = angular.copy(self.companyDetails.beneficialOwners);
        if(self.beneficialOwnerDetails.length == 0){
            self.addBORow();
        }
    };
    self.getCompanyDetailsById();
}]);