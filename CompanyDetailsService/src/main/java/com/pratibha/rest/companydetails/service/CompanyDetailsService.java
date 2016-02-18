package com.pratibha.rest.companydetails.service;

import java.util.List;

import com.pratibha.rest.companydetails.model.BeneficialOwner;
import com.pratibha.rest.companydetails.model.Company;

public interface CompanyDetailsService {

	void updateCompany(Company currentCompany);

	Company findByCompanyName(String name);

	Company findByCompanyId(long companyId);

	void saveCompany(Company company);

	List<Company> findAllCompanies();
	
	void updateBeneficiaryOwnerDetailsForCompany(List<BeneficialOwner> beneficialOwners, Company company);

}
