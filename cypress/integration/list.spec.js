/// <reference types="cypress" />

describe('List', () => {
  it('List empty', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '**//api/1/databases/userdetails/collections/newtable?**',
      status:200,
      response:[]
    }).as('getNewTable')
    
    cy.visit('WebTable.html')

    cy.get('div[role=row]').should('have.length',1)
    
  })

  it('List with one register', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '**//api/1/databases/userdetails/collections/newtable?**',
      status:200,
      response: 'fixture:webtable-get-only-user'
    }).as('getNewTable')
    
    cy.visit('WebTable.html')

    cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellFone')
    cy.get('@gridCellFone').should('contain','0123456789')
  })
})