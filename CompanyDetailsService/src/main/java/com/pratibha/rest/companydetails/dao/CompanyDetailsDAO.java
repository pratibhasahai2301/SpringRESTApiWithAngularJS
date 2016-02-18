package com.pratibha.rest.companydetails.dao;

import java.util.List;

import com.pratibha.rest.companydetails.model.Company;

public interface CompanyDetailsDAO {
	void updateCompany(Company currentCompany);

	Company findByCompanyName(String name);

	Company findByCompanyId(long companyId);

	void saveCompany(Company company);

	List<Company> findAllCompanies();
}
