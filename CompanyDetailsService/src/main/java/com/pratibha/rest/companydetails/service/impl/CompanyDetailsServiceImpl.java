package com.pratibha.rest.companydetails.service.impl;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pratibha.rest.companydetails.dao.BeneficialOwnerDAO;
import com.pratibha.rest.companydetails.dao.CompanyDetailsDAO;
import com.pratibha.rest.companydetails.model.BeneficialOwner;
import com.pratibha.rest.companydetails.model.Company;
import com.pratibha.rest.companydetails.service.CompanyDetailsService;

@Service("companyDetailsService")
@Transactional
public class CompanyDetailsServiceImpl implements CompanyDetailsService{

	
	@Autowired
	private CompanyDetailsDAO companyDetailsDAO;
	
	@Autowired
	private BeneficialOwnerDAO beneficialOwnerDAO;
	
	public void updateCompany(Company company) {
		companyDetailsDAO.updateCompany(company);
	}

	public Company findByCompanyName(String name) {
		return companyDetailsDAO.findByCompanyName(name);
	}

	public Company findByCompanyId(long companyId) {
		return companyDetailsDAO.findByCompanyId(companyId);
	}

	public void saveCompany(Company company) {
		companyDetailsDAO.saveCompany(company);
	}

	public List<Company> findAllCompanies() {
		return companyDetailsDAO.findAllCompanies();
	}

	public void updateBeneficiaryOwnerDetailsForCompany(
			List<BeneficialOwner> beneficialOwners, Company company) {
		
		if(company != null){
			for(BeneficialOwner owner: beneficialOwners){
				owner.setCompany(company);
				beneficialOwnerDAO.saveOrUpdateBeneficialOwner(owner);
			}
		}
	}
}