/**
 * ApplicationConfig.java
 */
package com.pratibha.rest.companydetails.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * This class is the annotation based configuration class for the application
 * 
 * @author Pratibha Pandey
 *
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.pratibha.rest.companydetails")
public class ApplicationConfig extends WebMvcConfigurerAdapter {
     
}