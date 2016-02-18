package com.pratibha.rest.companydetails.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.pratibha.rest.companydetails.dao.CompanyDetailsDAO;
import com.pratibha.rest.companydetails.model.Company;

@Repository("companyDetailsDAO")
public class CompanyDetailsDAOImpl implements CompanyDetailsDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public CompanyDetailsDAOImpl() {
	}

	public CompanyDetailsDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Transactional
	public void updateCompany(Company currentCompany) {
		sessionFactory.getCurrentSession().saveOrUpdate(currentCompany);
	}

	@Transactional
	public Company findByCompanyName(String name) {
		String hql = "from Company where companyName like '" + name +"'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);

		@SuppressWarnings("unchecked")
		List<Company> companyList = query.list();
		if (companyList != null && !companyList.isEmpty()) {
			return companyList.get(0);
		}

		return null;
	}

	@Transactional
	public Company findByCompanyId(long companyId) {
		String hql = "from Company where companyId=" + companyId;
		Query query = sessionFactory.getCurrentSession().createQuery(hql);

		@SuppressWarnings("unchecked")
		List<Company> companyList = query.list();
		if (companyList != null && !companyList.isEmpty()) {
			return companyList.get(0);
		}

		return null;
	}

	@Transactional
	public void saveCompany(Company company) {
		sessionFactory.getCurrentSession().saveOrUpdate(company);
	}

	@Transactional
	public List<Company> findAllCompanies() {
		@SuppressWarnings("unchecked")
		List<Company>  companyList = (List<Company>) sessionFactory.getCurrentSession().createQuery("from Company").list();
		return companyList;
	}
}