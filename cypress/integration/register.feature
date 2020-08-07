Feature: Register

  In app
  As a client
  I want make my register 
  
  Scenario: Register new user
    Given open the site
    When fill the fields
    And click in save
    Then the user is register with successful