Feature: List

  In app home page
  As a client
  I want see the users on table
  
  Scenario: List empty
    Given the site don't have register
    When I access the list
    Then must see a empty list

  Scenario: List with one register
    Given the site has only one register
    When I access the list
    Then must see a list with only one user