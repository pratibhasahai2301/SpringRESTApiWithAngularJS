/**
 * CompanyDetailsService.java
 */
package com.pratibha.rest.companydetails.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pratibha.rest.companydetails.model.BeneficialOwner;
import com.pratibha.rest.companydetails.model.Company;
import com.pratibha.rest.companydetails.service.CompanyDetailsService;
import com.pratibha.rest.companydetails.util.Validator;

/**
 * This class serves as the main service controller class for the
 * CompanyDetailsService project
 * 
 * @author Pratibha Pandey
 *
 */

@RestController
public class CompanyDetailsServiceController {

	@Autowired
	CompanyDetailsService companyDetailsService; 
	
	// ----Retrieve All Companies-------------------------

	@RequestMapping(value = "/get_all_companies", method = RequestMethod.GET)
	public ResponseEntity<List<Company>> listAllCompanies() {
		List<Company> companies = companyDetailsService.findAllCompanies();
		if (companies.isEmpty()) {
			return new ResponseEntity<List<Company>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Company>>(companies, HttpStatus.OK);
	}

	// -----Retrieve Single Company-----------------------

	@RequestMapping(value = "/get_company_by_id/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Company> getCompanyById(@PathVariable("id") long id) {
		Company company = companyDetailsService.findByCompanyId(id);
		if (company == null) {
			logger.info("Company with id " + id + " not found");
			return new ResponseEntity<Company>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Company>(company, HttpStatus.OK);
	}

	//----Create a Company-----

	@RequestMapping(value = "/create_company", method = RequestMethod.POST)
	public ResponseEntity<Void> createCompany(@RequestBody Company company) {
		logger.info("Creating Company " + company.getCompanyName());

		if (companyDetailsService.findByCompanyName(company.getCompanyName()) != null) {
			logger.info("A Company with name "
					+ company.getCompanyName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}

		if (Validator.isNotNull(company)
				&& Validator.isNotNull(company.getCompanyName())
				&& Validator.isNotNull(company.getCity())
				&& Validator.isNotNull(company.getCountry())
				&& Validator.isNotNull(company.getAddress())) {
			companyDetailsService.saveCompany(company);
		}else{
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}

		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	// ------------------- Update a Company
	// --------------------------------------------------------

	@RequestMapping(value = "/company_update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Company> updateCompany(
			@PathVariable("id") long companyId,
			@RequestBody Company company) {
		logger.info("Updating Company " + companyId);

		Company currentCompany = companyDetailsService
				.findByCompanyId(companyId);

		if (currentCompany == null) {
			logger.info("Company with id " + companyId + " not found");
			return new ResponseEntity<Company>(HttpStatus.NOT_FOUND);
		}

		currentCompany.setCompanyName(company.getCompanyName());
		currentCompany.setAddress(company.getAddress());
		currentCompany.setCity(company.getCity());
		currentCompany.setCountry(company.getCountry());
		currentCompany.setEmail(company.getEmail());
		currentCompany.setPhone(company.getPhone());

		companyDetailsService.updateCompany(currentCompany);
		return new ResponseEntity<Company>(currentCompany, HttpStatus.OK);
	}

	// -----------------Add Beneficial Owners to the company ------------------------------------------
	@RequestMapping(value = "/add_beneficial_owner/{id}", method = RequestMethod.POST)
	public ResponseEntity<Company> addBeneficialOwners(
			@PathVariable("id") long companyId,
			@RequestBody List<BeneficialOwner> beneficialOwners) {

		Company currentCompany = companyDetailsService
				.findByCompanyId(companyId);

		if (currentCompany == null) {
				logger.info("No company exists with id:" + companyId);
				return new ResponseEntity<Company>(HttpStatus.NOT_FOUND);
		}
		companyDetailsService.updateBeneficiaryOwnerDetailsForCompany(beneficialOwners,currentCompany);
		return new ResponseEntity<Company>(currentCompany, HttpStatus.OK);
	}


	/**
	 * Logger for {@link CompanyDetailsServiceController}
	 */
	final static Logger logger = Logger.getLogger(CompanyDetailsServiceController.class);
}
