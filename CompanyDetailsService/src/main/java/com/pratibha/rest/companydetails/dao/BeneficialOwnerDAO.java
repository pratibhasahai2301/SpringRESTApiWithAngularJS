package com.pratibha.rest.companydetails.dao;

import com.pratibha.rest.companydetails.model.BeneficialOwner;

public interface BeneficialOwnerDAO {

	public BeneficialOwner getBeneficialOwnerById(long beneficialOwnerId);
	
	public void saveOrUpdateBeneficialOwner(BeneficialOwner beneficialOwner);
}
