# SpringRESTApiWithAngularJS
This project is basically divided into two parts:

CompanyDetailsService
---------------------

CompanyDetailsService is a REST web service developed using Java Spring MVC framework. This service supports:

* Create new company
* Get a list of all companies
* Get details about a company
* Able to update a company
* Able to add beneficial owner(s) of the company

A Company has the following attributes:
* Company ID
* Name
* Address
* City
* Country
* E­mail (not required)
* Phone Number (not required)
* One or more beneficial owner(s)

The service contains following rest methods:

| Rest Method         | HTTPVerb | Path Variable  | Data                   |
|---------------------|----------|----------------|------------------------|
| get_all_companies   | GET      |None            |None                    |
| get_company_by_id   | GET      |companyId       |None                    |
| create_company      | POST     |None            |Company Obj             |
| company_update      | PUT      |companyId       |None                    |
| add_beneficial_owner| POST     |companyId       |List of BeneficialOwner |

CompanyDetailsClient
--------------------

CompanyDetailsClient is a AngularJS project that serves as a client for ClientDetailsService that uses gulp as a build tool.
|I have used sass and bootstrap for css.

Testing webservice with cURL:
-----------------------------

* *Create a company*:

    curl -v -H "Content-Type:application/json" -X POST http://localhost:8080/CompanyDetailsService/create_company -d "{\"companyName\":\"My Company\",\"address\":\"GGn\",\"city\":\"GGN\",\"country\":\"IND\",\"email\":\"test@test.com\",\"phone\":\"1234567890\"}"

* *Get company By Id*:

    curl -X GET http://localhost:8080/CompanyDetailsService/get_company_by_id/1

* *Updating a company*:

    curl -v -H "Content-Type:application/json" -X PUT http://localhost:8080/CompanyDetailsService/company_update/1 -d "{\"companyName\":\"My new company\",\"address\":\"GGn\",\"city\":\"GGN\",\"country\":\"IND\",\"email\":\"test@test.com\",\"phone\":\"1234567890\"}"

* *Adding Beneficial Owner to company*:

    curl -v -H "Content-Type:application/json" -X PUT http://localhost:8080/CompanyDetailsService/add_beneficial_owner/1 -d "[{\"beneficialOwnerName\":\"Pratibha Pandey\"},{\"beneficialOwnerName\":\"Pratibha Sahai\"}]"

* *Get All Companies*:

    curl -X GET http://localhost:8080/CompanyDetailsService/get_all_companies

Considerations
--------------
* **Authentication Protocol/Method**
        We can use HTTP Basic authentication (but over SSL only). We can use a special HTTP header where we add 'username:password' encoded in base64. Since they are encoded and not encrypted so it will very easy to retrieve the username and password from a basic authentication. That is why we need to use it over SSL only.

    We can also create temporary tokens(OAuth) for a user for each session and to validate we can pass these tokens as a parameter to the webservice. On the reciept of the token, we can decrypt the token service to validate the user.

* **Service Redundancy**
To make the service redundant, one thing we can do is to loosely couple the service with the database server. Probably we can make a separate module that connects to the database using Hibernate and fetches the records for us.


