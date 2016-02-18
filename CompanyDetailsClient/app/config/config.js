window.company_config  = _.merge(window.company_config || {},{
    //endpoint for all api calls
    endPointUrl:"http://localhost:8080/CompanyDetailsService/",

    apiUrl:{
        getAllCompaniesUrl: 'get_all_companies',
        getCompanyDetailsUrl:'get_company_by_id',
        getCompanyCreateUrl:'create_company',
        getCompanyUpdateUrl:'company_update',
        getBeneficialOwnerAddUrl:'add_beneficial_owner'
    }
});
