/**
 * Company.java
 */
package com.pratibha.rest.companydetails.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * This class represents Company entity in the database
 * 
 * @author Pratibha Pandey
 *
 */
@Entity
@Table(name = "COMPANY")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long companyId;

	@Size(min = 3, max = 45)
	@Column(name = "COMPANYNAME", nullable = false)
	private String companyName;

	@Size(min = 3, max = 1000)
	@Column(name = "ADDRESS", nullable = false)
	private String address;

	@Size(min = 2, max = 45)
	@Column(name = "CITY", nullable = false)
	private String city;

	@Size(min = 2, max = 45)
	@Column(name = "COUNTRY", nullable = false)
	private String country;

	@Size(min = 3, max = 60)
	@Column(name = "EMAIL", nullable = true)
	private String email;// not required

	@Size(min = 6, max = 15)
	@Column(name = "PHONE", nullable = true)
	private String phone;// not required

	@OneToMany(mappedBy="company",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<BeneficialOwner> beneficialOwners;

	/**
	 * @return the companyId
	 */
	public long getCompanyId() {
		return companyId;
	}

	/**
	 * @param companyId the companyId to set
	 */
	public void setCompanyId(long companyId) {
		this.companyId = companyId;
	}

	/**
	 * @return the companyName
	 */
	public String getCompanyName() {
		return companyName;
	}

	/**
	 * @param companyName the companyName to set
	 */
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}

	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return the beneficalOwners
	 */
	public List<BeneficialOwner> getBeneficialOwners() {
		return beneficialOwners;
	}

	/**
	 * @param beneficalOwners the beneficalOwners to set
	 */
	public void setBeneficalOwners(List<BeneficialOwner> beneficialOwners) {
		this.beneficialOwners = beneficialOwners;
	}
}