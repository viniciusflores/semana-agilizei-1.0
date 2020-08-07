/// <reference types="cypress" />


Given(/^the site don't have register$/, () => {
  cy.server()
  cy.route({
    method: 'GET',
    url: '**//api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: []
  }).as('getNewTable')
});


When(/^I access the list$/, () => {
  cy.visit('WebTable.html')
});


Then(/^must see a empty list$/, () => {
  cy.get('div[role=row]').should('have.length', 1)

});


Given(/^the site has only one register$/, () => {
  cy.server()
  cy.route({
    method: 'GET',
    url: '**//api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: 'fixture:webtable-get-only-user'
  }).as('getNewTable')
});


Then(/^must see a list with only one user$/, () => {
  cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellFone')
  cy.get('@gridCellFone').should('contain', '0123456789')
});