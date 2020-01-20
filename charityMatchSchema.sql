DROP DATABASE IF EXISTS charityMatch_DB;
CREATE DATABASE charityMatch_DB;

USE charityMatch_DB;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  email VARCHAR(100) NOT NULL,
  userName VARCHAR(100) NOT NULL,
  userPassword VARCHAR(100) NOT NULL,
  preferencesId int,
  PRIMARY KEY (id)
);

CREATE TABLE preferences(
  id INT NOT NULL AUTO_INCREMENT,
  question1 VARCHAR(100),
  question2 VARCHAR(100),
  question3 VARCHAR(100),
  question4 VARCHAR(100),
  question5 VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO user (firstName, lastName, email, userName, userPassword, preferencesId) values ('User1', 'Test', 'user1@test.com', 'user1', 'password1', 1);
INSERT INTO user (firstName, lastName, email, userName, userPassword, preferencesId) values ('User2', 'Test', 'user2@test.com', 'user2', 'password2', 2);
INSERT INTO preferences (question1, question2, question3, question4, question5) values ('answer1', 'answer2', 'answer3', 'answer4', 'answer5');
INSERT INTO preferences (question1, question2, question3, question4, question5) values ('otheranswer1', 'otheranswer2', 'otheranswer3', 'otheranswer4', 'otheranswer5');