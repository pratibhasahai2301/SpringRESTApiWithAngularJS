package com.pratibha.rest.companydetails.dao.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pratibha.rest.companydetails.dao.BeneficialOwnerDAO;
import com.pratibha.rest.companydetails.model.BeneficialOwner;
import com.pratibha.rest.companydetails.model.Company;

@Repository("beneficialOwnerDAO")
public class BeneficialOwnerDAOImpl implements BeneficialOwnerDAO{

	@Autowired
	private SessionFactory sessionFactory;

	public BeneficialOwnerDAOImpl() {
	}

	public BeneficialOwnerDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	/**
	 * This method is used to save or update beneficial Owner
	 * 
	 * @param beneficialOwner
	 */
	public void saveOrUpdateBeneficialOwner(BeneficialOwner beneficialOwner){
		logger.info("Saving of beneficialOwner");
		logger.info(beneficialOwner.getBeneficialOwnerId() + ":" + beneficialOwner.getBeneficialOwnerName());
		
		BeneficialOwner owner = getBeneficialOwnerById(beneficialOwner.getBeneficialOwnerId());
		
		if(owner == null){
			owner = new BeneficialOwner();
			owner.setBeneficialOwnerId(beneficialOwner.getBeneficialOwnerId());
			owner.setBeneficialOwnerName(beneficialOwner.getBeneficialOwnerName());
			owner.setCompany(beneficialOwner.getCompany());
			sessionFactory.getCurrentSession().save(owner);
		}else{
			if(!owner.getBeneficialOwnerName().equalsIgnoreCase(beneficialOwner.getBeneficialOwnerName())){
				owner.setBeneficialOwnerName(beneficialOwner.getBeneficialOwnerName());
				sessionFactory.getCurrentSession().update(owner);
			}
		}
	}
	
	/**
	 * This method is used to get
	 */
	public BeneficialOwner getBeneficialOwnerById(long beneficialOwnerId) {
		String hql = "from BeneficialOwner where beneficialOwnerId=" + beneficialOwnerId;
		Query query = sessionFactory.getCurrentSession().createQuery(hql);

		@SuppressWarnings("unchecked")
		List<BeneficialOwner> beneficialOwnerList = query.list();
		if (beneficialOwnerList != null && !beneficialOwnerList.isEmpty()) {
			return beneficialOwnerList.get(0);
		}

		return null;
	}
	
	/**
	 * Logger for {@link BeneficialOwnerDAOImpl}
	 */
	private static Logger logger = Logger.getLogger(BeneficialOwnerDAOImpl.class);
	
}
