/**
 * BeneficialOwner.java
 */
package com.pratibha.rest.companydetails.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * This class represents BeneficialOwner entity in the database
 * 
 * @author Pratibha Pandey
 *
 */
@Entity
@Table(name = "BENEFICIALOWNER")
public class BeneficialOwner {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long beneficialOwnerId;
	
	@Size(min = 2, max = 45)
	@Column(name = "BENEFICIALOWNERNAME", nullable = false)
	private String beneficialOwnerName;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "companyId")
	@JsonBackReference
	private Company company;

	/**
	 * @return the beneficialOwnerId
	 */
	public long getBeneficialOwnerId() {
		return beneficialOwnerId;
	}

	/**
	 * @param beneficialOwnerId the beneficialOwnerId to set
	 */
	public void setBeneficialOwnerId(long beneficialOwnerId) {
		this.beneficialOwnerId = beneficialOwnerId;
	}

	/**
	 * @return the beneficialOwnerName
	 */
	public String getBeneficialOwnerName() {
		return beneficialOwnerName;
	}

	/**
	 * @param beneficialOwnerName the beneficialOwnerName to set
	 */
	public void setBeneficialOwnerName(String beneficialOwnerName) {
		this.beneficialOwnerName = beneficialOwnerName;
	}

	/**
	 * @return the company
	 */
	public Company getCompany() {
		return company;
	}

	/**
	 * @param company the company to set
	 */
	public void setCompany(Company company) {
		this.company = company;
	}

}
