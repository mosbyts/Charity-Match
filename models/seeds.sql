DROP DATABASE IF EXISTS charityMatch;
CREATE DATABASE charityMatch;
USE charityMatch;

CREATE TABLE userData (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NULL,
  charityScore INT NULL,
  charityMatch VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(60) NULL,
    username VARCHAR(30) NULL,
    firstName VARCHAR(30) NULL,
    lastName VARCHAR(30) NULL,
    PRIMARY KEY (id)
);