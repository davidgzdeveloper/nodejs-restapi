CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE table employee (
	id INT(11) NOT NULL auto_increment,
    name VARCHAR(45) default null,
    salary INT(5) DEFAULT NULL,
    primary key(ID)
    );

DESCRIBE employee;

