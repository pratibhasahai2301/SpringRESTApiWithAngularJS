CREATE DATABASE companydetails;

USE companydetails;

DROP TABLE IF EXISTS `companydetails`.`beneficialowner`;
CREATE TABLE  `companydetails`.`beneficialowner` (
  `beneficialOwnerId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `beneficialOwnerName` varchar(45) NOT NULL,
  `companyId` int(10) unsigned NOT NULL,
  `modifiedBy` varchar(45) NOT NULL DEFAULT 'Pratibha',
  `modifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`beneficialOwnerId`),
  KEY `FK_beneficialowner_1` (`companyId`),
  CONSTRAINT `FK_beneficialowner_1` FOREIGN KEY (`companyId`) REFERENCES `company` (`companyid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `companydetails`.`company`;
CREATE TABLE  `companydetails`.`company` (
  `companyid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `companyname` varchar(45) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `modifiedBy` varchar(45) NOT NULL DEFAULT 'Pratibha',
  `modifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`companyid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;